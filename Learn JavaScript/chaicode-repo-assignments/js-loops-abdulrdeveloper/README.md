# JavaScript Loops Lab

Master JavaScript loops through **12 desi, story-based challenges**! From Raju ki chai tapri to IRCTC tatkal booking, each problem puts you in a real Indian scenario where you need to write the logic using `for`, `while`, `do...while`, `for...of`, and nested loops.

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
cd js-loops-lab
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

All challenges live in the `src/` folder. Start with `src/01-chai-tapri.js` and work your way up.

```
src/
├── 01-chai-tapri.js          ← Start here
├── 02-cricket-scoreboard.js
├── 03-auto-rickshaw-meter.js
├── 04-bollywood-playlist.js
├── 05-sabzi-mandi.js
├── 06-diwali-lights.js
├── 07-ipl-points-table.js
├── 08-emi-calculator.js
├── 09-upi-retry.js
├── 10-biryani-order.js
├── 11-rangoli-pattern.js
└── 12-indian-railways.js
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
export function chaiTapriRevenue(customers) {
  // Your code here
}

// After (example)
export function chaiTapriRevenue(customers) {
  if (!Number.isInteger(customers) || customers <= 0) {
    return { totalChai: 0, totalRevenue: 0 };
  }

  let totalRevenue = 0;
  for (let i = 1; i <= customers; i++) {
    // ... your logic
  }
  return { totalChai: customers, totalRevenue };
}
```

### Step 4 — Run the test for that challenge

```bash
npm test -- 01-chai
```

You can use any part of the filename to match:

```bash
npm test -- 02-cricket
npm test -- 03-auto
npm test -- bollywood
npm test -- sabzi
npm test -- biryani
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

| #  | File | Kahani | Loop Concept | Points |
|----|------|--------|-------------|--------|
| 01 | `01-chai-tapri.js` | Raju ki Chai Tapri | Basic `for` loop, modulo, accumulator | 7 |
| 02 | `02-cricket-scoreboard.js` | Gully Cricket Scoreboard | `for` loop, `break`, multiple counters | 7 |
| 03 | `03-auto-rickshaw-meter.js` | Pappu ka Auto Meter | `while` loop, rate tiers, `Math.ceil` | 8 |
| 04 | `04-bollywood-playlist.js` | Simran ki Road Trip Playlist | `while` with lookahead, skip invalid | 8 |
| 05 | `05-sabzi-mandi.js` | Amma ki Sabzi Mandi | `for...of`, object lookup, array building | 8 |
| 06 | `06-diwali-lights.js` | Sharma ji ki Diwali Lights | `for...of` + `while` trim, budget constraint | 8 |
| 07 | `07-ipl-points-table.js` | IPL Season Points Table | `for` with object accumulator, sorting | 9 |
| 08 | `08-emi-calculator.js` | Rohit ka Phone EMI | `while` accumulator, infinite loop guard | 9 |
| 09 | `09-upi-retry.js` | Bunty ka UPI Retry | `do...while`, exponential backoff | 8 |
| 10 | `10-biryani-order.js` | Paradise Biryani Batches | `do...while` with state, queue processing | 8 |
| 11 | `11-rangoli-pattern.js` | Priya ki Diwali Rangoli | Nested `for` loops, diamond pattern | 10 |
| 12 | `12-indian-railways.js` | IRCTC Tatkal Reservation | Nested loops, multi-pass, mutation | 10 |

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
git commit -m "Complete loops lab"
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

## Tips for Success

- **JSDoc dhyan se padho** — every rule and edge case is described there
- **Boundary values check karo** — tests often check exact boundaries
- **Loop type matters** — some problems specifically need `for`, `while`, `do...while`, or `for...of`
- **Return types matter** — most functions return objects, check the exact shape
- **Don't modify the test files** — only edit files in `src/`
- **Commit often** — don't wait until you've solved everything to push
- **Use `console.log()`** — add temporary logs to debug, then remove them before submitting

---

## Concepts Covered

- `for` loops with counters and accumulators
- `while` loops with dynamic conditions
- `do...while` loops (execute at least once)
- `for...of` loops for iterating arrays
- `break` statement to exit loops early
- Nested loops for complex patterns
- Object accumulators (building objects in loops)
- Array building within loops
- `Math.ceil()` for rounding up
- Exponential backoff pattern
- Input validation and edge cases

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm test` shows "command not found" | Run `npm install` first |
| All tests fail with `undefined` | You haven't written your solution yet — that's expected |
| Tests say "expected X but received Y" | Your logic is close but not matching the rules — re-read the JSDoc |
| `git push` is rejected | Run `git pull origin main` first, then push again |
| Tests pass locally but fail on GitHub | Make sure you pushed all your changes (`git status` to check) |

---

Good luck! Aur haan, chai peete peete code karna!
