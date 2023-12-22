import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    }
  }

  if (command !== 'serve') {
    config.base = '/comclub-website-2024/'
  }

  return config
})
