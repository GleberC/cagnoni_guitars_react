// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cagnoni-guitars/', // <- esse é o nome do repositório
  plugins: [react()],
});
