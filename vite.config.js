import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    hmr: {
      host: 'nidaan-app.onrender.com',
      protocol: 'wss'
    },
    allowedHosts: [
      'nidaan-app.onrender.com'
    ]
  }
})