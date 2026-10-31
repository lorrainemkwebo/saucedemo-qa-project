const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
});

test('TC-01: standard_user can log in with the correct password', async ({ page }) => {
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await expect(page).toHaveURL(/inventory/);
});

test('TC-02: wrong password shows an error and stays on the login page', async ({ page }) => {
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'wrong_password');
  await page.click('[data-test="login-button"]');

  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText('do not match');
  await expect(page).not.toHaveURL(/inventory/);
});

test('TC-03: login with both fields empty shows an error', async ({ page }) => {
  await page.click('[data-test="login-button"]');

  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText('Username is required');
  await expect(page).not.toHaveURL(/inventory/);
});

test('TC-04: locked out user sees a locked out message', async ({ page }) => {
  await page.fill('[data-test="username"]', 'locked_out_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText('locked out');
  await expect(page).not.toHaveURL(/inventory/);
});

test('TC-13: username without a password shows an error', async ({ page }) => {
  await page.fill('[data-test="username"]', 'standard_user');
  await page.click('[data-test="login-button"]');

  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText('Password is required');
  await expect(page).not.toHaveURL(/inventory/);
});

test('TC-14: password without a username shows an error', async ({ page }) => {
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText('Username is required');
  await expect(page).not.toHaveURL(/inventory/);
});