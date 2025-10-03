import { defineConfig, devices } from '@playwright/test';

// Detect if running inside Codespaces, Docker, or CI
const isCI = !!process.env.CI || !!process.env.CODESPACES || !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  testDir: './packages/server/__tests__', // 👈 adjust if needed
  use: {
    headless: isCI,   // ✅ headless in CI/Codespaces, headed locally
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
