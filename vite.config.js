import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cagnoni_guitars_react',
  plugins: [react()],
})

