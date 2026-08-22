# JavaScript DOM Manipulation Lab

Master DOM manipulation through **12 desi, story-based challenges**! From Kolkata ke sweet shop ka menu board to Republic Day parade dashboard, each problem puts you in a real Indian scenario where you need to manipulate the DOM using createElement, querySelector, classList, events, forms, traversal, and more.

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
cd js-dom-lab
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

All challenges live in the `src/` folder. Start with `src/01-kolkata-sweet-shop.js` and work your way up.

```
src/
├── 01-kolkata-sweet-shop.js     ← Start here
├── 02-chai-stall-board.js
├── 03-rangoli-designer.js
├── 04-mehndi-canvas.js
├── 05-puja-thali-builder.js
├── 06-wedding-card-maker.js
├── 07-aarti-form.js
├── 08-kite-festival-gallery.js
├── 09-auto-wallah-counter.js
├── 10-durga-puja-pandal.js
├── 11-navratri-garba.js
└── 12-republic-day-parade.js
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
export function createSweetItem(name, price, category) {
  // Your code here
}

// After (example)
export function createSweetItem(name, price, category) {
  if (!name || typeof price !== 'number' || !category) return null;
  const div = document.createElement('div');
  div.classList.add('sweet-item');
  // ... DOM manipulation logic
  return div;
}
```

### Step 4 — Run the test for that challenge

```bash
npm test -- 01-kolkata
```

You can use any part of the filename to match:

```bash
npm test -- 02-chai
npm test -- 03-rangoli
npm test -- mehndi
npm test -- puja-thali
npm test -- wedding
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

| #  | File | Kahani | DOM Concept | Points |
|----|------|--------|------------|--------|
| 01 | `01-kolkata-sweet-shop.js` | Kolkata ka Sweet Shop Menu | createElement & appendChild | 7 |
| 02 | `02-chai-stall-board.js` | Sharma ji ki Chai Stall | getElementById, querySelector, textContent | 7 |
| 03 | `03-rangoli-designer.js` | Diwali Rangoli Designer | classList (add/remove/toggle/contains) | 8 |
| 04 | `04-mehndi-canvas.js` | Digital Mehndi Canvas | style property manipulation | 8 |
| 05 | `05-puja-thali-builder.js` | Online Puja Thali Builder | addEventListener & click events | 8 |
| 06 | `06-wedding-card-maker.js` | Shaadi ka Digital Card | Event delegation | 9 |
| 07 | `07-aarti-form.js` | Mandir Aarti Booking Form | Form handling & validation | 9 |
| 08 | `08-kite-festival-gallery.js` | Uttarayan Kite Gallery | Dynamic rendering from data | 8 |
| 09 | `09-auto-wallah-counter.js` | Auto-Rickshaw Queue System | DOM traversal (parentNode, closest) | 9 |
| 10 | `10-durga-puja-pandal.js` | Durga Puja Pandal Tracker | data-* attributes & dataset | 9 |
| 11 | `11-navratri-garba.js` | Navratri Garba Stage | insertBefore, cloneNode, replaceChild | 9 |
| 12 | `12-republic-day-parade.js` | Republic Day Parade Dashboard | Capstone: All DOM Concepts | 9 |

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
git commit -m "Complete DOM lab"
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
- **DOM API samjho** — `createElement`, `appendChild`, `querySelector`, `classList`, `dataset` are your best friends
- **Return types matter** — some functions return elements, some return booleans, some return objects
- **Null checks important hain** — most functions should handle null/undefined gracefully
- **Events test karo** — use `element.click()` mentally to trace what happens
- **Don't modify the test files** — only edit files in `src/`
- **Commit often** — don't wait until you've solved everything to push
- **Use `console.log()`** — add temporary logs to debug, then remove them before submitting

---

## Concepts Covered

- Creating elements with `document.createElement()` and appending with `appendChild()`
- Querying elements with `getElementById()`, `querySelector()`, `querySelectorAll()`
- Modifying text with `textContent` and `innerHTML`
- Managing classes with `classList` (add, remove, toggle, contains)
- Manipulating inline styles via `element.style`
- Handling events with `addEventListener()` and cleanup
- Event delegation pattern with `event.target.closest()`
- Form handling with `preventDefault()` and validation
- Dynamic rendering from data arrays
- DOM traversal with `parentNode`, `closest()`, sibling navigation
- Working with `data-*` attributes and the `dataset` API
- Advanced DOM manipulation: `insertBefore`, `cloneNode`, `replaceChild`, `removeChild`

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

Good luck! Aur haan, DOM manipulate karte karte chai peena mat bhoolna!
