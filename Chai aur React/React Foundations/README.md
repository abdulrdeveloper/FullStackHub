# React Foundations

Welcome to the **React Foundations** repository! This workspace is carefully crafted for students and learners to progressively master React and modern web development. 

Each `foundation-xx` directory contains a standalone Vite + React project that focuses on specific core concepts. By progressing sequentially through the folders, any student can grasp React topics step-by-step in bite-sized modules.

## How to Work With These Modules

To get started with any of the foundations, follow these steps:

1. **Navigate to the Project Directory:**
   ```bash
   cd foundation-01  # or whichever foundation module you want to run
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

## Important: Auto-Running Your Code (Vite Server Configuration)

To make sure your development environment automatically updates and reloads flawlessly, please ensure your `vite.config.js` file in *each* foundation framework is configured properly.

Add the following `server` configuration block inside `defineConfig` to guarantee that your code dynamically reloads efficiently (crucial for students on Windows or WSL environments):

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    hmr: {
      localhost: 'localhost'
    }
  }
})
```

By explicitly providing `hmr` and `usePolling: true`, Vite is optimized to actively watch your files and poll for changes, ensuring your UI updates accurately as soon as you hit save!

Happy Learning!
