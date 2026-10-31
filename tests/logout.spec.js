const { test, expect } = require('@playwright/test');

test('TC-12: logging out returns to the login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await page.click('#react-burger-menu-btn');
  await page.click('[data-test="logout-sidebar-link"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});