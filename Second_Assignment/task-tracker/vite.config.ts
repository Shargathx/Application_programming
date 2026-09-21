/// <reference types="vitest/config" />
// ^ works without as well, but keeping in place just in case ^
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  base: '/Application_programming/Second_Assignment/task-tracker/',
});
