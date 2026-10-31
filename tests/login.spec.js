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

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await expect(page).toHaveURL(/inventory/);
});

test('TC-05: adding one item shows 1 on the cart icon', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});

test('TC-06: removing an item takes it out of the cart', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

  await page.click('[data-test="remove-sauce-labs-backpack"]');
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
});

test('TC-15: checkout with an empty cart should be blocked', async ({ page }) => {
  test.fail(); // known bug (Bug Report 002): the site lets you continue
  await page.click('[data-test="shopping-cart-link"]');
  await page.click('[data-test="checkout"]');
  await expect(page).not.toHaveURL(/checkout-step-one/);
});


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