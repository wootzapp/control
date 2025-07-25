import { defineConfig } from 'vitest/config';
import next from 'next/babel';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
  esbuild: {
    loader: 'tsx',
  },
  plugins: [],
});
