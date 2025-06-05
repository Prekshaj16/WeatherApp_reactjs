// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WeatherApp_reactjs/', // 👈 must match your GitHub repo name exactly (case-sensitive)
})
