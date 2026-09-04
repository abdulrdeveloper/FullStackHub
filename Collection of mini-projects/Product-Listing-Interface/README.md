# Tech Explorer 🚀

A simple product listing app built with React. Click a button to see random tech products with smooth animations!

## What You'll Learn 📚

- **React Hooks** — useState, useEffect, event handling
- **API Calls** — Fetching data with async/await
- **Image Loading** — Making sure content loads before showing it
- **Responsive Design** — Works on mobile, tablet, and desktop
- **CSS Animations** — Gradients, hover effects, smooth transitions

## Quick Start 🏃

```bash
# 1. Install packages
npm install

# 2. Run the app
npm run dev

# 3. Open browser → http://localhost:5173
```

## How It Works 🔧

1. App loads → Fetches random product
2. Image loads → Button appears
3. Click button → Gets next product
4. Repeat!

**The Code Magic:**
- `useState` tracks product data and image loading state
- `useEffect` fetches product when component loads
- Image `onLoad` event shows the button
- Each click resets the state and fetches a new product

## Project Files 📁

```
src/
├── App.jsx       ← React logic
├── App.css       ← All styling
└── main.jsx      ← Entry point
```

## Commands 💻

```bash
npm run dev       # Run while coding
npm run build     # Create final version
npm run lint      # Check for errors
```

## What You'll See ✨

- Cool gradient text and button effects
- Smooth animations when hovering
- Product details (price, rating, tags)
- Works perfectly on all screen sizes
- Button only appears when image is loaded

## Troubleshooting 🔍

**App won't start?**
- Delete `node_modules` folder
- Run `npm install` again

**Images not loading?**
- Check your internet
- API might be slow, wait a bit

---

**Happy Coding! 💻** Learn by exploring, breaking things, and fixing them!
