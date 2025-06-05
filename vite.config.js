// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WEATHERAPP_REACTJS/',  // 👈 use your repo name here
})
