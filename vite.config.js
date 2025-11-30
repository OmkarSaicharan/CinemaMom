import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CinemaMom/',  // 👈 EXACT folder name of your repo
})
