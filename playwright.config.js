
import { defineConfig, devices } from '@playwright/test';
const baseURL = process.env.BASE_URL || "http://localhost:3100";

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: "html",
  timeout: 30000,
  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    baseURL: baseURL,
    headless: true,
    browserName: "chromium"
  },
});

