import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      localhost: 'localhost',
    },
    watch: {
      usePolling: true,
    },
  },
})
