import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;
const host = process.env.APP_URL || 'http://localhost:3000';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 5 : undefined,
  ignoreSnapshots: !isCI,

  reporter: [['allure-playwright'], ['html', {}], ['dot']],
  use: {
    baseURL: host,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox dark',
      use: {
        ...devices['Desktop Firefox'],
        colorScheme: 'dark',
      },
    },
    {
      name: 'webkit mobile',
      use: { ...devices['iPhone 12'] },
    },
  ],

  webServer: isCI
    ? undefined
    : {
        command: 'npm start',
        url: 'http://localhost:3000',
        reuseExistingServer: true,
      },
});
