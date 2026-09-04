# Contributing to Web Dev for All 🚀

Thank you for taking the time to contribute! Whether you are fixing a typo, adding notes, submitting a new mini-project, or optimizing backend code, every contribution helps make this learning resource better for everyone.

Please take a moment to review this guide to ensure a smooth collaboration process.

---

## 🧭 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How You Can Contribute](#how-you-can-contribute)
- [Getting Started](#getting-started)
- [Repository Conventions](#repository-conventions)
- [Git Commit Guidelines](#git-commit-guidelines)
- [Pull Request Checklist](#pull-request-checklist)
- [Community & Contact](#community--contact)

---

## 🤝 Code of Conduct

This project is an open, welcoming learning space for developers of all backgrounds and skill levels. When interacting with this repository, please:

- **Be Respectful**: Treat everyone with courtesy, kindness, and empathy.
- **Be Constructive**: Offer helpful, encouraging feedback during code reviews and issue discussions.
- **Be Collaborative**: Focus on shared learning and improvement.

Harassment or exclusionary behavior of any kind will not be tolerated.

---

## 💡 How You Can Contribute

There are many ways you can contribute to this repository:

### 1. 📝 Improve Documentation & Notes
- Fix typos, grammatical errors, or formatting issues in notes and guides.
- Clarify complex explanations across HTML, CSS, JavaScript, React, Backend, SQL, etc.
- Add real-world analogies, code snippets, or diagrams.

### 2. 🎨 Add or Improve Mini-Projects
- Submit clean, well-structured frontend projects (React, Vanilla JS, Tailwind CSS).
- Enhance UI/UX, responsive layouts, or accessibility (a11y) in existing projects.
- Fix bugs or broken API integrations in current mini-projects.

### 3. ⚙️ Backend & API Experiments
- Add practical backend exercises (Express.js, Node.js, REST APIs, GraphQL, WebSockets).
- Introduce database examples (MongoDB, PostgreSQL, SQLite, Prisma, Drizzle).
- Improve error handling, validation, or security practices in backend templates.

### 4. 🧪 Tests & Tooling
- Write automated unit tests (Jest, Vitest) for assignment solutions or projects.
- Improve build configurations, linting rules, or scripts.

---

## 🛠️ Getting Started

Follow these steps to propose changes:

### 1. Fork the Repository

Click the **Fork** button at the top-right of the [web-dev-for-all repository](https://github.com/abdulrdeveloper/web-dev-for-all) to create your own copy.

### 2. Clone Your Fork

Clone your fork to your local machine:

```bash
git clone https://github.com/<your-username>/web-dev-for-all.git
cd web-dev-for-all
```

### 3. Create a New Branch

Create a descriptive feature or bugfix branch:

```bash
# For a new feature or project
git checkout -b feat/add-weather-app

# For a bug fix or typo
git checkout -b fix/react-meals-api-url

# For documentation updates
git checkout -b docs/update-sql-guide
```

### 4. Work in the Specific Project / Directory

Remember that each runnable project in this repository is isolated in its own folder:

```bash
# Example: Navigating into a specific project
cd "Collection of mini-projects/Product-Listing-Interface"
npm install
npm run dev
```

Test your changes thoroughly before committing!

---

## 📐 Repository Conventions

To keep this multi-topic repository clean, organized, and easy to maintain, please follow these guidelines:

1. **Isolation**:
   - Each project or application must remain self-contained within its own directory.
   - Do not add project-specific dependencies to the repository root.
2. **Documentation**:
   - If you create a new application or service, include a dedicated `README.md` inside its folder detailing:
     - Project overview & features
     - Tech stack
     - Installation & run commands
     - Environment variables (if applicable)
     - API endpoints / usage instructions
3. **Clean Diffs & Git Hygiene**:
   - **Never commit `.env` files** containing sensitive secrets, credentials, or API keys. Always provide a `.env.example` file instead.
   - **Never commit `node_modules/`**, build output (`dist/`, `build/`), coverage reports, or OS artifacts (`.DS_Store`, `Thumbs.db`).
   - Check `.gitignore` before committing files.
4. **Code Quality**:
   - Write readable, descriptive variable and function names.
   - Prefer modern JavaScript/TypeScript standards (ES Modules, async/await).
   - Keep notes and documentation formatted with clean GitHub Flavored Markdown.

---

## 📝 Git Commit Guidelines

We recommend using clear and descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format:

| Prefix | Usage | Example |
| :--- | :--- | :--- |
| `feat:` | A new project, route, or feature | `feat: add search filter to quotes app` |
| `fix:` | A bug fix | `fix: resolve CORS issue in express backend` |
| `docs:` | Documentation changes only | `docs: add setup instructions to crud-notes-app` |
| `style:` | Code style / formatting changes (no logic change) | `style: format css with prettier` |
| `refactor:`| Code refactoring without adding features or fixes | `refactor: extract mongo connection into separate module` |
| `test:` | Adding or updating tests | `test: add unit tests for note creation endpoint` |
| `chore:` | Maintenance, updates, dependencies | `chore: update dependencies in react project` |

---

## ✅ Pull Request Checklist

Before submitting your pull request, please verify:

- [ ] My code follows the repository's structure and conventions.
- [ ] I have tested my changes locally to ensure existing functionality is not broken.
- [ ] Any new project includes a comprehensive local `README.md`.
- [ ] No unwanted files (e.g. `.env`, `node_modules`, temporary files) are committed.
- [ ] Commit messages are clear and descriptive.
- [ ] The Pull Request title and description clearly explain what changed and why.

---

## 📬 Submitting Your Pull Request

1. Push your branch to your GitHub fork:
   ```bash
   git push origin feat/your-feature-name
   ```
2. Navigate to the original [web-dev-for-all](https://github.com/abdulrdeveloper/web-dev-for-all) repository on GitHub.
3. Click the green **Compare & pull request** button.
4. Fill out the PR template/description explaining:
   - What changed
   - Context or motivations
   - How to test the change
5. Submit the Pull Request! 🎉

---

## 💬 Community & Contact

Have questions, suggestions, or want to discuss an idea before submitting a PR?

- Open an issue on GitHub: [Issues tab](https://github.com/abdulrdeveloper/web-dev-for-all/issues)
- Connect with **Abdul Rahman**:
  - GitHub: [@abdulrdeveloper](https://github.com/abdulrdeveloper)
  - Website: [abdulrdeveloper.me](https://abdulrdeveloper.me)

Thank you for contributing to **Web Dev for All**! Happy Coding! ✨

