import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },

})
