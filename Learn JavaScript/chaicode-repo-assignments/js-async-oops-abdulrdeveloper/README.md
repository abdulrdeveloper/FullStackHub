# JavaScript Async & OOP Lab

Master Object-Oriented Programming and asynchronous JavaScript through **12 desi, story-based challenges**! From Ramu ka samosa cart to a full startup incubator system, each problem puts you in a real Indian scenario where you need to use `this`, classes, inheritance, Promises, async/await, and more.

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
cd js-async-oop-lab
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

All challenges live in the `src/` folder. Start with `src/01-samosa-wala.js` and work your way up.

```
src/
├── 01-samosa-wala.js            ← Start here
├── 02-lassi-stand.js
├── 03-dabba-delivery.js
├── 04-cricket-academy.js
├── 05-haveli-mansion.js
├── 06-chai-promise.js
├── 07-zomato-delivery.js
├── 08-irctc-booking.js
├── 09-swiggy-batch.js
├── 10-paytm-retry.js
├── 11-temple-queue.js
└── 12-startup-incubator.js
```

### Step 2 — Read the story and rules

Each file has a detailed JSDoc comment at the top that explains:
- The **kahani** (story — a real Indian scenario)
- The **rules** your function/class must follow
- The **parameters** and **return values**

Read it carefully — every edge case and requirement is described there.

### Step 3 — Write your solution

Replace `// Your code here` with your implementation:

```js
// Before
export function createSamosaCart(ownerName, location) {
  // Your code here
}

// After (example)
export function createSamosaCart(ownerName, location) {
  return {
    owner: ownerName,
    location,
    menu: { samosa: 15, jalebi: 20, kachori: 25 },
    sales: [],
    sellItem(itemName, quantity) {
      if (!this.menu[itemName] || quantity <= 0) return -1;
      const total = this.menu[itemName] * quantity;
      this.sales.push({ item: itemName, quantity, total });
      return total;
    },
    // ... more methods
  };
}
```

### Step 4 — Run the test for that challenge

```bash
npm test -- 01-samosa
```

You can use any part of the filename to match:

```bash
npm test -- 02-lassi
npm test -- 03-dabba
npm test -- cricket
npm test -- haveli
npm test -- chai-promise
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

| #  | File | Kahani | Concept | Points |
|----|------|--------|---------|--------|
| 01 | `01-samosa-wala.js` | Ramu ka Samosa Cart | `this` keyword basics | 7 |
| 02 | `02-lassi-stand.js` | Punjab ki Lassi Stand | Constructor functions & prototype | 7 |
| 03 | `03-dabba-delivery.js` | Mumbai Dabba Delivery | ES6 Classes | 8 |
| 04 | `04-cricket-academy.js` | Cricket Academy | Inheritance (extends, super) | 8 |
| 05 | `05-haveli-mansion.js` | Purani Haveli Security | Encapsulation (private fields #) | 8 |
| 06 | `06-chai-promise.js` | Tapri ki Chai Promise | Promise creation (resolve/reject) | 9 |
| 07 | `07-zomato-delivery.js` | Zomato Delivery Pipeline | Promise chaining (.then/.catch) | 9 |
| 08 | `08-irctc-booking.js` | IRCTC Train Booking | async/await | 9 |
| 09 | `09-swiggy-batch.js` | Swiggy Batch Delivery | Promise.all, .race, .allSettled | 9 |
| 10 | `10-paytm-retry.js` | Paytm Payment Retry | Error handling & custom errors | 9 |
| 11 | `11-temple-queue.js` | Temple Darshan Queue | Static methods, getters, Symbol.iterator | 9 |
| 12 | `12-startup-incubator.js` | Startup Incubator | Capstone: OOP + async + this | 9 |

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
git commit -m "Complete async-oop lab"
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
- **`this` samjho** — understand how `this` behaves in regular functions vs arrow functions vs methods
- **Inheritance chain samjho** — `super()` call mandatory hai before using `this` in constructor
- **Private fields (#)** — these are truly private, not accessible from outside the class
- **Promises** — always return a Promise or use async/await, never forget error handling
- **async/await** — `await` only works inside `async` functions
- **Don't modify the test files** — only edit files in `src/`
- **Commit often** — don't wait until you've solved everything to push
- **Use `console.log()`** — add temporary logs to debug, then remove them before submitting

---

## Concepts Covered

- The `this` keyword and context binding (bind, call, apply)
- Constructor functions and the `new` keyword
- Prototypes and prototype-based inheritance
- ES6 Classes (class, constructor, methods)
- Inheritance with `extends` and `super`
- Encapsulation with private fields (`#`)
- Promise creation with `new Promise(resolve, reject)`
- Promise chaining with `.then()` and `.catch()`
- `async/await` for cleaner asynchronous code
- `Promise.all`, `Promise.race`, `Promise.allSettled`
- Custom error classes extending `Error`
- Retry patterns and error recovery
- Static methods and factory patterns
- Getters and setters
- `Symbol.iterator` for custom iterables
- Combining all OOP and async concepts together

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
| Promise tests timeout | Make sure your promises resolve/reject — don't leave them hanging |

---

Good luck! Aur haan, classes aur promises likhte likhte chai peena mat bhoolna!
