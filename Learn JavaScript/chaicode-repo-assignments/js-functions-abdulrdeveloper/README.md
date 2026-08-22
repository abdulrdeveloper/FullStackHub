# JavaScript Functions Lab

Master JavaScript functions through **12 desi, story-based challenges**! From Raju ka dosa counter to Panchayat elections, each problem puts you in a real Indian scenario where you need to write the logic using default parameters, arrow functions, closures, higher-order functions, recursion, composition, and more.

**Total: 100 points across 12 challenges**

---

## Prerequisites

- [Node.js](https://nodejs.org/) v20 or higher
- [Git](https://git-scm.com/)
- A code editor (VS Code recommended)

---

## Getting Started

### 1. Accept the assignment

Click the GitHub Classroom invitation link shared by your instructor. This will create a **personal copy** of this repository under your GitHub account.

### 2. Clone your repository

```bash
git clone <your-repo-url>
cd js-functions-lab
```

Replace `<your-repo-url>` with the URL from your GitHub Classroom repo (the green **Code** button).

### 3. Install dependencies

```bash
npm install
```

### 4. Verify everything works

```bash
npm test
```

You should see **all tests failing** — that's expected! Your job is to make them pass.

---

## How to Solve the Challenges

### Step 1 — Open a challenge file

All challenges live in the `src/` folder. Start with `src/01-dosa-counter.js` and work your way up.

```
src/
├── 01-dosa-counter.js          ← Start here
├── 02-cricket-stats.js
├── 03-tiffin-service.js
├── 04-bollywood-director.js
├── 05-dabbawala-tracker.js
├── 06-shaadi-rsvp.js
├── 07-mehndi-pattern.js
├── 08-dhaba-rating.js
├── 09-holi-colors.js
├── 10-masala-blender.js
├── 11-festival-planner.js
└── 12-panchayat-election.js
```

### Step 2 — Read the story and rules

Each file has a detailed JSDoc comment at the top that explains:
- The **kahani** (story — a real Indian scenario)
- The **rules** your function must follow
- The **parameters** and **return values**

Read it carefully — every edge case and requirement is described there.

### Step 3 — Write your solution

Replace `// Your code here` with your implementation:

```js
// Before
export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  // Your code here
}

// After (example)
export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  const prices = { plain: 40, masala: 60, onion: 50, butter: 70, paper: 90, cheese: 80 };
  if (typeof type !== "string" || !prices[type]) return null;
  if (typeof quantity !== "number" || quantity <= 0 || Number.isNaN(quantity)) return null;

  const pricePerDosa = prices[type] + (isSpicy ? 10 : 0);
  const total = pricePerDosa * quantity;
  return { type, quantity, pricePerDosa, total };
}
```

### Step 4 — Run the test for that challenge

```bash
npm test -- 01-dosa
```

You can use any part of the filename to match:

```bash
npm test -- 02-cricket
npm test -- 03-tiffin
npm test -- bollywood
npm test -- dabbawala
npm test -- mehndi
```

### Step 5 — Fix and repeat

If tests fail, read the error messages — they tell you exactly what was expected vs. what your function returned. Fix your code and run the test again.

### Step 6 — Move to the next challenge

Once all tests pass for a challenge, move on to the next one. They get progressively harder.

### Run all tests at once

```bash
npm test
```

### Watch mode (auto re-run on save)

```bash
npm run test:watch
```

This re-runs tests every time you save a file — very handy while working.

---

## Challenges

| #  | File | Kahani | Function Concept | Points |
|----|------|--------|-----------------|--------|
| 01 | `01-dosa-counter.js` | Raju ka Dosa Counter | Default Parameters & Return Values | 7 |
| 02 | `02-cricket-stats.js` | Gully Cricket Stats | Arrow Functions | 7 |
| 03 | `03-tiffin-service.js` | Amma ka Tiffin Service | Destructuring Params & Rest/Spread | 8 |
| 04 | `04-bollywood-director.js` | Bollywood Director's Cut | Functions Returning Functions / Factory | 8 |
| 05 | `05-dabbawala-tracker.js` | Mumbai Dabbawala Tracker | Closures | 8 |
| 06 | `06-shaadi-rsvp.js` | Sharma ji ki Shaadi RSVP | Callback Functions | 9 |
| 07 | `07-mehndi-pattern.js` | Priya ki Mehndi Pattern | Recursion | 9 |
| 08 | `08-dhaba-rating.js` | Highway Dhaba Rating | Higher-Order Functions | 8 |
| 09 | `09-holi-colors.js` | Holi ke Rang | Pure Functions | 9 |
| 10 | `10-masala-blender.js` | Masala Blender Mix | Function Composition | 9 |
| 11 | `11-festival-planner.js` | Festival Planner App | IIFE / Module Pattern | 9 |
| 12 | `12-panchayat-election.js` | Panchayat Election System | Capstone: All Concepts Combined | 9 |

---

## Submitting Your Work

### 1. Check your progress

Run all tests to see how many you've solved:

```bash
npm test
```

### 2. Stage your changes

```bash
git add src/
```

> **Important:** Only add files from `src/`. Do not modify or commit test files.

### 3. Commit your work

```bash
git commit -m "Complete functions lab"
```

You can commit as many times as you want — each push triggers a new grading run.

### 4. Push to GitHub

```bash
git push origin main
```

### 5. Check your grade

After pushing, go to your repository on GitHub:

1. Click the **Actions** tab
2. You'll see a workflow run in progress (or completed)
3. Click on it to see which tests passed and your total score out of 100

You can push again to improve your score — GitHub Classroom will always use the latest result.

---

## Windows Users

If you are on Windows and `npm test` fails, use the Windows-specific scripts instead:

```bash
npm run test:win
```

For watch mode on Windows:

```bash
npm run test:win:watch
```

---

## Tips for Success

- **JSDoc dhyan se padho** — every rule and edge case is described there
- **Function type matters** — some problems specifically need arrow functions, some need regular functions, some need IIFEs
- **Return types matter** — check the exact shape of what each function should return
- **Closures samjho** — understand how inner functions capture variables from outer scope
- **Pure functions mein side effects mat karo** — don't mutate inputs, don't use external state
- **Don't modify the test files** — only edit files in `src/`
- **Commit often** — don't wait until you've solved everything to push
- **Use `console.log()`** — add temporary logs to debug, then remove them before submitting

---

## Concepts Covered

- Default parameters and return values
- Arrow functions and concise syntax
- Destructuring parameters with rest/spread operators
- Factory functions (functions returning functions)
- Closures and lexical scope
- Callback functions and async patterns
- Recursion (base case, recursive case)
- Higher-order functions (`map`, `filter`, `reduce`, custom)
- Pure functions and immutability
- Function composition and piping
- IIFE (Immediately Invoked Function Expressions) and module pattern
- Combining all function concepts together

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm test` shows "command not found" | Run `npm install` first |
| All tests fail with `undefined` | You haven't written your solution yet — that's expected |
| Tests say "expected X but received Y" | Your logic is close but not matching the rules — re-read the JSDoc |
| `git push` is rejected | Run `git pull origin main` first, then push again |
| Tests pass locally but fail on GitHub | Make sure you pushed all your changes (`git status` to check) |
| `npm test` fails on Windows | Use `npm run test:win` instead |

---

Good luck! Aur haan, functions likhte likhte chai peena mat bhoolna!
