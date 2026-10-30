# Contributing Guidelines

Thank you for your interest in contributing to **Chai aur Filesystem & Multer**!

## How to Contribute

1. **Fork the Repository**: Create your personal fork of the project.
2. **Clone & Branch**:
   ```bash
   git clone https://github.com/abdulrdeveloper/FullStackHub.git
   cd "FullStackHub/backend best collection/chai-aur-filesystem"
   git checkout -b feat/your-feature-name
   ```
3. **Install Dependencies**:
   ```bash
   pnpm install
   ```
4. **Make Changes**:
   - Write clean, readable code.
   - Follow standard ECMAScript modules syntax.
   - Test endpoints thoroughly using Postman or cURL.
5. **Commit Changes**:
   - Use conventional commit messages (`feat:`, `fix:`, `docs:`, `refactor:`).
6. **Open a Pull Request**:
   - Push your branch and open a PR against the `main` branch with a clear description of your changes.

## Code Standards
- Keep business logic inside controllers.
- Use async/await and central error handling with `next(error)`.
- Use `pnpm` exclusively as the package manager.
