import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://romanbarannickov.github.io/vk-edu-20-2024-demo',
  build: {
    outDir: 'build', 
  },
})
