import { existsSync, readdirSync } from 'fs';
import { basename } from 'path';
import chalk from 'chalk';

export function checkFileExists(filePath: string, description: string): void {
  if (!existsSync(filePath)) {
    console.error(chalk.red(`Error: ${description} file not found: ${filePath}`));
    process.exit(1);
  }
}

export function listAvailableResumeTypes(): void {
  console.log('Available resume types:');
  try {
    const files = readdirSync('resume-types')
      .filter((file) => file.endsWith('.md') && file !== 'common-rules.md')
      .map((file) => basename(file, '.md'));
    files.forEach((type) => console.log(`  - ${type}`));
  } catch {
    console.error(chalk.yellow('Could not list resume-types directory'));
  }
}

export function generateTimestamp(): string {
  return new Date()
    .toISOString()
    .replace(/[:.]/g, '-')
    .split('T')
    .join('_')
    .slice(0, -5);
}
