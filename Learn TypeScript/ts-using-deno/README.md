# TypeScript with Deno

Deno is a secure runtime for JavaScript and TypeScript. Like Bun, it has native TypeScript support and doesn't require compiling to JS first.

## VS Code Setup for Deno
Because Deno uses a different module system (using URLs instead of node_modules), it can conflict with standard Node.js projects in VS Code.
1. Install the official **Deno VS Code Extension** (denoland.vscode-deno).
2. This folder has a local .vscode/settings.json file enabling Deno specifically for this directory.

## How to Set This Up Yourself
1. Initialize a project: deno init .
2. This creates deno.json (similar to package.json) and some starter files.

## How to Run & Test
- **Run**: deno run main.ts (Use flags like --allow-read or --allow-net if your code needs permissions).
- **Test**: deno test
