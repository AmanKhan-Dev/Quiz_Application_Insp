import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default ({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jsonserve.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
})

// vite.config.js
