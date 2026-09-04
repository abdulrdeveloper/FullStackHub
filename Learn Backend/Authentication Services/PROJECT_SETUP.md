# 🚀 Backend Authentication Service - Project Setup

## 📦 Prerequisites

- Node.js installed
- VS Code installed

---

## 🛠️ Step by Step Setup

### Step 1 — install pnpm (globally)

```bash
npm install -g pnpm  <!---pnpm is a fast package manager , it also fatch the same data from npm---!>
```

### Step 2 — Create a Project folder

```bash
mkdir "Authentication Service"
cd "Authentication Service"
```

### Step 3 — Initialize the Project

```bash
pnpm init
```

### Step 4 — Create TypeScript config

```bash
npx tsc --init
```

### Step 5 — Create gitignore

```bash
npx gitignore node
```

### Step 6 — tsc-watch install the tsc-watch package as a dev devendency <!--- (it is used for watching the code and if the code is succeed then instantly run and update it)---!>

```bash
pnpm i tsc-watch -D
```

### Step 7 — Create src folder and index.ts file

```bash
mkdir src
touch src/index.ts
```

### Step 8 — install express and types for express (install types as a dev dependency)

```bash
pnpm i express
pnpm i @types/express -D
```

### Step 9 — install types for node (install types as a dev dependency)

```bash
pnpm i @types/node -D
```

---

## ⚙️ tsconfig.json Settings

Uncomment this in `tsconfig.json`:

```json
"outDir": "./dist",
"rootDir": "./src",
"types": ["node"]
"lib": ["esnext"],
    "types": ["node"],
```

---

## 📝 package.json Scripts

```json
{
  "scripts": {
    "test": "node dist/index", <!---(the destination location of the generated output)---!>
    "build": "tsc -p .", <!---(used for converting the current ts file into js)---!>
    "dev": "tsc-watch --onSuccess \"node dist/index\"" <!---(it means :: watch the code and if the code is succeed then instantly run and update it)---!>
  }
}
```

---

---

## 📚 npm vs npx vs pnpm

|          | npm                   | npx              | pnpm                   |
| -------- | --------------------- | ---------------- | ---------------------- |
| Use Case | Install               | Execute          | Fast Install           |
| Example  | `npm install express` | `npx tsc --init` | `pnpm install express` |

---
