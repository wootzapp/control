import { defineConfig } from 'playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run build && npm start',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
  testDir: './tests',
  testMatch: '**/*.e2e.ts',
});
