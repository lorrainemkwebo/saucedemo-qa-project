# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> TC-06: removing an item takes it out of the cart
- Location: tests/login.spec.js:55:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="add-to-cart-sauce-labs-backpack"]')

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('TC-01: standard_user can log in with the correct password', async ({ page }) => {
  4  |   await page.goto('https://www.saucedemo.com');
  5  |   await page.fill('[data-test="username"]', 'standard_user');
  6  |   await page.fill('[data-test="password"]', 'secret_sauce');
  7  |   await page.click('[data-test="login-button"]');
  8  |   await expect(page).toHaveURL(/inventory/);
  9  | });
  10 | 
  11 | test('TC-02: wrong password shows an error and stays on the login page', async ({ page }) => {
  12 |   await page.goto('https://www.saucedemo.com');
  13 |   await page.fill('[data-test="username"]', 'standard_user');
  14 |   await page.fill('[data-test="password"]', 'wrong_password');
  15 |   await page.click('[data-test="login-button"]');
  16 | 
  17 |   const error = page.locator('[data-test="error"]');
  18 |   await expect(error).toBeVisible();
  19 |   await expect(error).toContainText('do not match');
  20 |   await expect(page).not.toHaveURL(/inventory/);
  21 | });
  22 | 
  23 | test('TC-03: login with both fields empty shows an error', async ({ page }) => {
  24 |   await page.goto('https://www.saucedemo.com');
  25 |   await page.click('[data-test="login-button"]');
  26 | 
  27 |   const error = page.locator('[data-test="error"]');
  28 |   await expect(error).toBeVisible();
  29 |   await expect(error).toContainText('Username is required');
  30 |   await expect(page).not.toHaveURL(/inventory/);
  31 | });
  32 | 
  33 | test('TC-13: username without a password shows an error', async ({ page }) => {
  34 |   await page.goto('https://www.saucedemo.com');
  35 |   await page.fill('[data-test="username"]', 'standard_user');
  36 |   await page.click('[data-test="login-button"]');
  37 | 
  38 |   const error = page.locator('[data-test="error"]');
  39 |   await expect(error).toBeVisible();
  40 |   await expect(error).toContainText('Password is required');
  41 |   await expect(page).not.toHaveURL(/inventory/);
  42 | });
  43 | 
  44 | test('TC-14: password without a username shows an error', async ({ page }) => {
  45 |   await page.goto('https://www.saucedemo.com');
  46 |   await page.fill('[data-test="password"]', 'secret_sauce');
  47 |   await page.click('[data-test="login-button"]');
  48 | 
  49 |   const error = page.locator('[data-test="error"]');
  50 |   await expect(error).toBeVisible();
  51 |   await expect(error).toContainText('Username is required');
  52 |   await expect(page).not.toHaveURL(/inventory/);
  53 | });
  54 | 
  55 | test('TC-06: removing an item takes it out of the cart', async ({ page }) => {
> 56 |   await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
     |              ^ Error: page.click: Test timeout of 30000ms exceeded.
  57 |   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  58 | 
  59 |   await page.click('[data-test="remove-sauce-labs-backpack"]');
  60 |   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
  61 | });
  62 | 
  63 | 
  64 | 
```