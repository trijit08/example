import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    // ADD 'default' TO THIS ARRAY 👇
    reporters: ['default', 'json'], 
    outputFile: 'test.json'
  },
});