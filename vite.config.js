import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { fileURLToPath } from "url";
// import path from "path";
import tailwindcss from '@tailwindcss/vite';

// import { fileURLToPath } from "url";
// import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    devSourcemap: true,
  },
  base: '/react-exercicios/',
})
