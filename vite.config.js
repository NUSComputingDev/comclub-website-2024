import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(
      {
        babel: {
          plugins: [
            ['@babel/plugin-syntax-import-attributes', { legacy: true }],
          ],
        },
      },
    )],
    base: '/',
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  };

  if (command !== 'serve') {
    config.base = '/comclub-website-2024/';
  }

  return config;
});
