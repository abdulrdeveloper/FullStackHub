# JavaScript Conditionals Lab

Master JavaScript conditionals through **12 real-world, story-based challenges**. Each question puts you in a scenario where you need to write the logic using `if/else`, `switch`, ternary operators, and logical operators.

**Total: 166 tests across 12 challenges = 100 points**

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
cd js-conditionals-lab
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

You should see **166 failing tests** — that's expected! Your job is to make them pass.

---

## How to Solve the Challenges

### Step 1 — Open a challenge file

All challenges live in the `src/` folder. Start with `src/01-ticket-pricing.js` and work your way up.

```
src/
├── 01-ticket-pricing.js      ← Start here
├── 02-traffic-light.js
├── 03-grade-calculator.js
├── ...
└── 12-season-activity.js
```

### Step 2 — Read the story and rules

Each file has a detailed JSDoc comment at the top that explains:
- The **story** (a real-world scenario)
- The **rules** your function must follow
- The **parameters** and **return values**

Read it carefully — every edge case and requirement is described there.

### Step 3 — Write your solution

Replace `// Your code here` with your implementation:

```js
// Before
export function getTicketPrice(age, isWeekend) {
  // Your code here
}

// After (example)
export function getTicketPrice(age, isWeekend) {
  if (typeof age !== 'number' || age < 0) return -1;

  let price;
  if (age <= 12) {
    price = 8;
  }
  // ... rest of your logic
  return price;
}
```

### Step 4 — Run the test for that challenge

```bash
npm test -- 01-ticket
```

You can use any part of the filename to match:

```bash
npm test -- 02-traffic
npm test -- 03-grade
npm test -- coffee
npm test -- parking
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

| #  | File | Story | Concepts | Points |
|----|------|-------|----------|--------|
| 01 | `01-ticket-pricing.js` | Starlight Cinema | `if/else if`, age ranges, boolean flag | 8 |
| 02 | `02-traffic-light.js` | SafeDrive Simulator | `switch` statement, case-insensitivity | 8 |
| 03 | `03-grade-calculator.js` | Ms. Parker's Report Cards | `if/else if` chain, bonus logic, validation | 8 |
| 04 | `04-weather-advice.js` | TrailBuddy Hiking App | Nested conditions, temperature + boolean | 8 |
| 05 | `05-library-card.js` | Maple Town Library | Logical operators (`&&`), returning objects | 8 |
| 06 | `06-shipping-calculator.js` | ShopSwift Online Store | Multiple factors, free shipping threshold | 9 |
| 07 | `07-coffee-shop.js` | Bean & Brew Cafe | `switch` + `if`, default parameters | 9 |
| 08 | `08-tax-calculator.js` | Sam's Freelance Taxes | Progressive brackets, math + conditionals | 9 |
| 09 | `09-password-strength.js` | SecureApp Signup | Multiple criteria checks, counting conditions | 9 |
| 10 | `10-tip-calculator.js` | TipEasy Restaurant App | Rating mapping, rounding, returning objects | 8 |
| 11 | `11-parking-fee.js` | City Central Parking | `Math.ceil`, rate tiers, daily cap | 9 |
| 12 | `12-season-activity.js` | WanderLust Travel Planner | Two-step logic (season → activity), compound conditions | 8 |

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
git commit -m "Complete conditionals lab"
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

- **Read the JSDoc carefully** — every rule and edge case is described there
- **Check boundary values** — tests often check exact boundaries (e.g., age 12 vs 13)
- **Order matters** — some problems require checking conditions in a specific order
- **Return types matter** — some functions return numbers, some return strings, some return objects, and some return `null`
- **Don't modify the test files** — only edit files in `src/`
- **Commit often** — don't wait until you've solved everything to push
- **Use `console.log()`** — add temporary logs to debug, then remove them before submitting

---

## Concepts Covered

- `if`, `else if`, `else` statements
- `switch` statements
- Ternary operator (`condition ? a : b`)
- Logical operators (`&&`, `||`, `!`)
- Comparison operators (`===`, `>`, `<`, `>=`, `<=`)
- Nested conditionals
- Returning objects from functions
- Input validation and edge cases
- `Math.ceil()` for rounding up
- `Math.round()` and `Math.min()` for numeric precision

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

Good luck!
