const { test, expect } = require('@playwright/test');

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