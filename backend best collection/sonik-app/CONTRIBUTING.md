# Contributing to Sonik

Thanks for contributing to Sonik.

## Development Setup

1. Fork or clone the repository.
2. Install backend dependencies:

   ```bash
   cd Backend
   pnpm install
   ```

3. Copy `Backend/.env.example` to `Backend/.env` and add local values.
4. Start the backend:

   ```bash
   pnpm dev
   ```

## Workflow

- Create a focused branch for each feature or fix.
- Keep changes small and related to the issue.
- Follow the existing ES module style and naming conventions.
- Do not commit secrets, `.env` files, uploaded media, or generated dependencies.
- Update the README when an API contract or setup step changes.

## Before Opening a Pull Request

Run syntax checks for changed JavaScript files:

```bash
node --check path/to/changed-file.js
```

Then test the affected API flow in Postman, including the relevant validation and unauthorized cases.

## Commit Guidance

Use concise commit messages that describe the change, for example:

```text
Add paginated music listing
Fix album detail lookup
```

## Pull Requests

A pull request should include:

- A short description of the change
- The API routes or user flows affected
- Testing performed
- Any setup or environment changes

Please avoid unrelated formatting or refactoring in the same pull request.
