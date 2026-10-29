const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html']],
  use: {
    headless: true,
    screenshot: 'on',
    trace: 'retain-on-failure',
  },
});