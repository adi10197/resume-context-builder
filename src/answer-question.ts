#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { spawnSync } from 'child_process';
import { writeFileSync, unlinkSync } from 'fs';
import { getProvider } from './providers.js';

function executeProviderToStdout(command: string, prompt: string): string | null {
  try {
    // Create a temporary prompt file
    const promptFile = `/tmp/question-prompt-${Date.now()}.txt`;
    writeFileSync(promptFile, prompt);

    try {
      // Execute the provider command
      const result = spawnSync('sh', ['-c', `cat "${promptFile}" | ${command}`], {
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024, // 10MB buffer
      });

      if (result.error || result.status !== 0) {
        console.error(chalk.red('Error: Failed to generate answer'));
        if (result.stderr) {
          console.error(result.stderr);
        }
        return null;
      }

      return result.stdout;
    } finally {
      // Cleanup temp file
      unlinkSync(promptFile);
    }
  } catch (error) {
    console.error(chalk.red('Error: Failed to execute AI provider'));
    console.error(error);
    return null;
  }
}

function buildQuestionPrompt(question: string): string {
  return `You are helping answer a job application question based on the candidate's career history.

## Question to Answer:
${question}

## Instructions:
1. Read and analyze ALL the following files:
   - All career history files in the career/ folder
   - The education file in education/education.md

2. Answer the question thoughtfully and specifically:
   - Draw from relevant experiences in the career history
   - Include specific examples, projects, and achievements
   - Use concrete details and metrics when available
   - Keep the answer focused and relevant to the question
   - Write in first person (I, my, etc.)

3. Format the answer:
   - Keep it concise but complete (2-4 paragraphs typically)
   - Use professional but conversational tone
   - Highlight the most relevant experiences first
   - End with a strong closing statement if appropriate

4. Output ONLY the answer text
   - Do not include meta-commentary or explanations
   - Just provide the answer as if you are the candidate responding

## Context Files:
Career files: career/*.md
Education: education/education.md

Now, please answer the question above based on this career context.`;
}

function main() {
  const program = new Command();

  program
    .name('answer-question')
    .description('Answer job application questions using your career context')
    .version('1.0.0')
    .argument('<question>', 'The job application question to answer')
    .option('--provider <provider>', 'AI provider to use (default: claude)', 'claude')
    .option('-p, --paste', 'Print prompt to terminal instead of calling AI provider', false)
    .addHelpText(
      'after',
      `
Examples:
  $ npm run answer -- "Tell me about your experience with cloud development"
  $ npm run answer -- "Describe a time you led a technical project"
  $ npm run answer -- --provider claude "What is your experience with React?"
    `
    );

  program.parse();

  const question = program.args[0];
  const options = program.opts<{ provider: string; paste: boolean }>();

  if (!question || question.trim().length === 0) {
    console.error(chalk.red('Error: Question cannot be empty'));
    process.exit(1);
  }

  // Validate provider
  const provider = getProvider(options.provider);
  if (!provider) {
    console.error(chalk.red(`Error: Unknown provider '${options.provider}'`));
    process.exit(1);
  }

  // Check provider availability (only if not in paste mode)
  if (!options.paste && !provider.checkAvailable()) {
    console.error(chalk.yellow(`Warning: ${provider.name} not found in PATH`));
    console.error(`This script requires ${provider.name} to answer questions`);
    console.error("Please install it or ensure it's in your PATH");
    console.error('Or use --paste mode to see the prompt');
    process.exit(1);
  }

  // Display what we're doing
  console.log(chalk.green('Analyzing your career history to answer the question...'));
  console.log(chalk.cyan(`Question: ${question}`));
  console.log('');

  // Build prompt
  const prompt = buildQuestionPrompt(question);

  // Execute based on mode
  if (options.paste) {
    // Paste mode: Display prompt for manual use
    console.log(chalk.yellow('Paste mode enabled - displaying prompt:'));
    console.log('');
    console.log(prompt);
  } else {
    // Direct mode: Call provider and output to stdout
    const answer = executeProviderToStdout(provider.command, prompt);

    if (!answer) {
      process.exit(1);
    }

    // Output the answer
    console.log(chalk.green('Answer:'));
    console.log('─'.repeat(80));
    console.log(answer.trim());
    console.log('─'.repeat(80));
    console.log('');
    console.log(chalk.dim('Tip: You can copy this answer and customize it for your application'));
  }
}

main();
