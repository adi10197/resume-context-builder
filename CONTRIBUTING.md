# Contributing to Resume Context Builder

Thanks for your interest in contributing! This project thrives on community contributions—whether it's new resume templates, improved prompts, or bug fixes.

## Ways to Contribute

### 1. Share Resume Templates

The most valuable contribution is sharing resume type configurations that work well for specific roles or industries.

**To add a new resume type:**

1. Create a new file in `resume-types/` (e.g., `data-scientist.md`)
2. Follow the existing template structure
3. Include clear instructions for the LLM on formatting, sections, and priorities
4. Test it with your own career data before submitting

**Naming conventions:**
- General roles: `software-engineer.md`, `product-manager.md`
- Company-specific: `software-engineer-google.md`, `product-manager-stripe.md`
- Industry-specific: `software-engineer-fintech.md`

### 2. Improve Existing Templates

If you've found ways to get better results from existing resume types:

- Open an issue first to discuss the changes
- Keep in mind these templates should work for the "average" case in the industry
- If your improvements are very specific to a niche, consider creating a new template instead

### 3. Add AI Providers

Want to add support for a new AI provider? Extend `src/providers.ts`:

1. Add a new provider configuration
2. Implement the command generation logic
3. Update the README with setup instructions
4. Test thoroughly before submitting

### 4. Report Issues

Found a bug or have a suggestion? [Open an issue](../../issues) with:

- A clear description of the problem or suggestion
- Steps to reproduce (for bugs)
- Your environment (OS, Bun version, AI provider)

## Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-new-template`)
3. Make your changes
4. Test your changes locally
5. Commit with a clear message (`git commit -m "Add data-scientist resume type"`)
6. Push to your fork (`git push origin feature/my-new-template`)
7. Open a Pull Request

## Guidelines

- **Keep it simple** — This tool is meant to be easy to use and maintain
- **Privacy first** — Never commit real personal data, use placeholders
- **Test your changes** — Make sure templates produce good results
- **Document clearly** — Update the README if you add new features

## Code Style

- Use TypeScript for any source code changes
- Follow existing patterns in the codebase
- Keep dependencies minimal

## Questions?

Open an issue or start a discussion. We're happy to help!
