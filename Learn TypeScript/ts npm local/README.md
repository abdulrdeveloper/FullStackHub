# Standard TypeScript with Node & NPM

This folder demonstrates the traditional way to use TypeScript with Node.js. Since Node.js does not run TypeScript natively, it requires a compilation step.

## How to Set This Up Yourself
1. Initialize project: 
npm init -y
2. Install TypeScript: 
npm install typescript --save-dev
3. Create TS Config: 
npx tsc --init

## How to Compile & Run
- **Compile**: Run 
npx tsc in your terminal. This reads 	sconfig.json and converts .ts files into .js files.
- **Run**: Execute the generated JavaScript file with Node: 
node dist/index.js (or wherever your outDir is set).
- **Auto-compile**: Use 
npx tsc --watch to recompile automatically on save.
