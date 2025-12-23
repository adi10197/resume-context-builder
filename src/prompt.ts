import type { GenerateOptions } from './types.js';

export function buildPrompt(options: GenerateOptions, resumeTypeFile: string): string {
  let prompt = `Please generate a professional resume in markdown format based on the provided context files.

## Instructions:

1. Read and analyze ALL the following files:
   - All career history files in the career/ folder
   - The education file in education/education.md
   - The common rules in resume-types/common-rules.md
   - The specific resume type rules in resume-types/${options.type}.md

2. If a job description is provided, tailor the resume to match:
   - Use keywords from the job description
   - Emphasize relevant experience and skills
   - Highlight applicable technologies
   - Match the tone and terminology

3. If a reference resume is provided, use it as a formatting and style guide

4. Generate a complete, professional resume following these guidelines:
   - Follow all rules from common-rules.md
   - Apply specific formatting from the resume type file
   - Include quantifiable achievements and metrics
   - Use action verbs and impact-focused language
   - Ensure ATS-friendly formatting
   - Keep it concise (1-2 pages maximum)
   - Make it relevant to the target role

5. Output ONLY the resume content in clean markdown format
   - Do not include explanations or meta-commentary
   - Do not wrap the output in code blocks
   - Just output the raw markdown resume

## Context Files:

### Resume Type: ${options.type}

Career files: career/*.md
Education: education/education.md
Common rules: resume-types/common-rules.md
Resume type: ${resumeTypeFile}`;

  if (options.job) {
    prompt += `\nJob description: ${options.job}`;
  }

  if (options.reference) {
    prompt += `\nReference resume: ${options.reference}`;
  }

  return prompt;
}
