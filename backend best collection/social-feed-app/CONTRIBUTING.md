# Contributing to Glimpse

Thank you for helping improve Glimpse. The project values focused changes, clear communication, and a polished experience for people publishing and reading daily updates.

## Before You Start

1. Open an issue for a larger feature or behavior change.
2. For small fixes, explain the intended change in your pull request.
3. Check existing issues and pull requests before starting duplicate work.

## Development Setup

```bash
git clone <repository-url>
cd social-feed-app

cd Backend
pnpm install

cd ../Frontend
pnpm install
```

Configure the required local environment variables described in [README.md](README.md), then run the backend and frontend in separate terminals.

## Contribution Guidelines

- Keep changes focused on one problem or feature.
- Follow the existing JavaScript, React, and Express patterns.
- Prefer small, readable components and straightforward data flow.
- Use `async`/`await` with `try`/`catch` for asynchronous operations.
- Preserve responsive behavior in both light and dark themes.
- Keep secrets, credentials, and local environment files out of commits.
- Avoid adding dependencies when the existing stack can solve the problem.
- Update documentation when setup, API behavior, or user-facing workflows change.

## Quality Checks

Run the relevant checks before opening a pull request:

```bash
cd Frontend
pnpm lint
pnpm build
```

For backend changes, start the API locally and verify both endpoints:

- `GET /posts`
- `POST /create-post` with an image and optional caption

For UI changes, include a short manual test note and screenshots when the visual result is important.

## Pull Requests

A useful pull request includes:

- A concise title describing the change
- A short explanation of the problem and solution
- Testing performed locally
- Screenshots or a short recording for visual changes
- Any new environment variables or deployment notes

Keep pull requests reviewable. Separate refactors, formatting-only changes, and unrelated fixes when possible.

## Reporting Bugs

Please include:

- The browser, Node.js version, and operating system
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Relevant logs or screenshots
- Whether the issue occurs in light mode, dark mode, or both

Please remove private keys, database URLs, and personal data before sharing logs.
