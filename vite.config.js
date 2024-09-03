import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss({
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    }),
  ],
})
