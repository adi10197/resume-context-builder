# Resume Context Builder

> **Stop manually updating your resume for every job application.** 

Let AI do the heavy lifting.

An intelligent, AI-powered resume generator that crafts perfectly tailored resumes from your career history. Built for developers, tech leads, and professionals who want to maintain one source of truth for their career while generating customized resumes for different opportunities.

## Why Use This?
- **Works with any LLM you are paying for** - Re-use whatever LLM subscription you are already using.
- **Easy to Maintain** - Yearly, write a single file summarizing your work experience, to keep up-to-date.
- **Generates resumes for any job-type** - With your existing work-experience rebuild your resume for a different job-type.
- **ATS-Optimized** - Generate resumes that pass Applicant Tracking Systems while remaining human-readable
- **Privacy** - Just fork this repo and maintain your own copy, don't give your information to anyone. 
- **Crowd sources** - Industry professionals are encouraged to contribute to this repo: adding new resume-types and refining existing resume-types.

## Quick Start

### Prerequisites

Before you begin, you'll need:

1. **Node.js** (version 18 or higher)
   - Check if installed: `node --version`
   - [Install Node.js](https://nodejs.org/) - Download the LTS version
   - For beginners: [Node.js installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. **An AI Provider CLI** (currently supports Claude Code CLI)
   - [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code/overview) - Requires an Anthropic API key
   - Alternative: Use `--paste` mode to generate prompts for any AI tool you already use

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd resume-context-builder

# 2. Install dependencies
npm install

# 3. Fill in your information
# - Add your career history to career/ (one file per year)
# - Add your education to education/education.md
# - Review resume-types/ for available templates

# 4. Generate your first resume
npm run generate -- --type software-engineer

# 5. Tailor it to a specific job
npm run generate -- --type software-engineer --job job-descriptions/example-senior-swe.md
```

## Ask a Question
Often times you get a job application that asks a question like "Tell us how your experience is relevant to ABC" or "Do you have experience with XYZ? Explain.".

To quickly answer these questions, run:
```bash
npm run answer -- "Do you have exerpience with XYZ? Explain."
```

## Project Structure

```
career-context-builder/
├── src/                     # TypeScript source code
│   ├── generate.ts          # Main CLI entry point
│   ├── types.ts             # Type definitions
│   ├── providers.ts         # AI provider configurations
│   ├── utils.ts             # Utility functions
│   └── prompt.ts            # Prompt building logic
├── career/                  # Year-based career history files
│   ├── 2020.md
│   ├── 2021.md
│   └── ...
├── resume-types/            # Resume templates and formatting rules
│   ├── common-rules.md      # Rules that apply to all resume types
│   ├── software-engineer.md
│   ├── tech-lead.md
│   └── ...
├── education/               # Education history
│   └── education.md
├── job-descriptions/        # Optional job descriptions for tailoring
│   └── *.md
├── reference-resumes/       # Example resumes for reference
│   └── *.md
├── output/                  # Generated resumes
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Usage Examples

### Basic Resume Generation

Generate a resume using a specific template:

```bash
npm run generate -- --type software-engineer
```

### Tailor to a Job Description

Match your resume to a specific job posting:

```bash
npm run generate -- --type software-engineer --job job-descriptions/example-senior-swe.md
```

### Use a Reference Resume

Generate based on a reference format:

```bash
npm run generate -- --type software-engineer --reference reference-resumes/example.md
```

### Paste Mode (Manual Use)

Print the prompt instead of auto-generating (useful for testing):

```bash
npm run generate -- --type software-engineer --paste
```

### Use a Different AI Provider

The tool is designed to be extensible with different AI providers:

```bash
npm run generate -- --type software-engineer --provider claude
```

## Command Line Options

- `--type` or `-t`: Resume type (required, must match a file in resume-types/)
- `--job` or `-j`: Path to job description file (optional)
- `--reference` or `-r`: Path to reference resume (optional)
- `--output` or `-o`: Output file path (default: output/resume-{timestamp}.md)
- `--paste` or `-p`: Print prompt to terminal instead of calling AI provider (optional)
- `--provider`: AI provider to use (default: claude) - extensible for future providers

## FAQ

**Q: Do I need programming knowledge to use this?**
A: Basic command line familiarity and Node.js installed. If you can run `npm install` and `npm run` commands, you're good to go.

**Q: Can I use this with other AI models besides Claude?**
A: Yes! The TypeScript codebase is designed to be extensible. Currently supports Claude Code CLI, but you can easily add new providers in `src/providers.ts`. You can also use `--paste` mode to generate prompts for any AI tool.

**Q: How much does it cost?**
A: The tool itself is free and open source. You'll need access to an AI provider (like Claude Code CLI).

**Q: Will this work for non-technical resumes?**
A: Absolutely! While built by developers, it works for any profession. Just customize your resume types and career files accordingly.

**Q: How do I handle gaps in employment?**
A: Document everything chronologically in your career files. The resume type rules can specify how to handle gaps.

**Q: Can I use this for multiple people (e.g., as a career coach)?**
A: Yes! Just create different branches for each person.

## Contributing

Contributions are welcome! Here are some ways you can help:

- **Share resume templates** - Submit your resume type configurations
- **Refine existing resume templates** - Update existing resume-types with better LLM instructions.
  - NOTE: Think of this as the average of the industry. What is relevant for your company might not be relevant across the entire industry. If you still think there can be a different resume-type, just add a new resume-type files. Make sure the naming is good.
- **Add AI providers** - Extend `src/providers.ts` to support more AI services
- **Report issues** - Found a bug? Open an issue

## License

This project is open source and available under the MIT License.

## Acknowledgments

Built with TypeScript and designed to work with AI providers like [Claude Code CLI](https://docs.claude.com/claude-code) by Anthropic.

---

**Made with AI, for humans looking for their next opportunity.**

If this tool helped you land a job, star this repo and share it with others!
