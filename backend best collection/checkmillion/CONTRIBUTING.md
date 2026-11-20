# Contributing Guidelines

Thank you for your interest in contributing to **CheckMillion**!

## How to Contribute

1. **Fork the Repository**: Create your personal fork of the project.
2. **Clone & Branch**:
   ```bash
   git clone https://github.com/abdulrdeveloper/FullStackHub.git
   cd "FullStackHub/backend best collection/checkmillion"
   git checkout -b feat/your-feature-name
   ```
3. **Start Redis and Install Dependencies**:
   ```bash
   docker compose up -d
   pnpm install
   ```
4. **Make Changes**:
   - Write clean, readable code.
   - Follow standard ECMAScript modules syntax.
   - Test with at least two browser tabs open, so you can see changes sync between them.
5. **Commit Changes**:
   - Use conventional commit messages (`feat:`, `fix:`, `docs:`, `refactor:`).
6. **Open a Pull Request**:
   - Push your branch and open a PR against the `main` branch with a clear description of your changes.

## Code Standards
- Keep socket event names in the `client:*` / `server:*` format.
- Keep Redis access in `redis-connection.js` and reuse the shared clients.
- Use `pnpm` exclusively as the package manager.
