import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts'
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  preview: {
		port: 3000,
	}
});
