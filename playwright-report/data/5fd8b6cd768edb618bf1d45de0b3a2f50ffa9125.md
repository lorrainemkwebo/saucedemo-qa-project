# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> TC-02: wrong password shows an error and stays on the login page
- Location: tests/login.spec.js:14:1

# Error details

```
Error: page.fill: Test ended.
Call log:
  - waiting for locator('[data-test="username"]')

```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.beforeEach(async ({ page }) => {
  4   |   await page.goto('https://www.saucedemo.com');
  5   | });
  6   | 
  7   | test('TC-01: standard_user can log in with the correct password', async ({ page }) => {
  8   |   await page.fill('[data-test="username"]', 'standard_user');
  9   |   await page.fill('[data-test="password"]', 'secret_sauce');
  10  |   await page.click('[data-test="login-button"]');
  11  |   await expect(page).toHaveURL(/inventory/);
  12  | });
  13  | 
  14  | test('TC-02: wrong password shows an error and stays on the login page', async ({ page }) => {
> 15  |   await page.fill('[data-test="username"]', 'standard_user');
      |              ^ Error: page.fill: Test ended.
  16  |   await page.fill('[data-test="password"]', 'wrong_password');
  17  |   await page.click('[data-test="login-button"]');
  18  | 
  19  |   const error = page.locator('[data-test="error"]');
  20  |   await expect(error).toBeVisible();
  21  |   await expect(error).toContainText('do not match');
  22  |   await expect(page).not.toHaveURL(/inventory/);
  23  | });
  24  | 
  25  | test('TC-03: login with both fields empty shows an error', async ({ page }) => {
  26  |   await page.click('[data-test="login-button"]');
  27  | 
  28  |   const error = page.locator('[data-test="error"]');
  29  |   await expect(error).toBeVisible();
  30  |   await expect(error).toContainText('Username is required');
  31  |   await expect(page).not.toHaveURL(/inventory/);
  32  | });
  33  | 
  34  | test('TC-04: locked out user sees a locked out message', async ({ page }) => {
  35  |   await page.fill('[data-test="username"]', 'locked_out_user');
  36  |   await page.fill('[data-test="password"]', 'secret_sauce');
  37  |   await page.click('[data-test="login-button"]');
  38  | 
  39  |   const error = page.locator('[data-test="error"]');
  40  |   await expect(error).toBeVisible();
  41  |   await expect(error).toContainText('locked out');
  42  |   await expect(page).not.toHaveURL(/inventory/);
  43  | });
  44  | 
  45  | test.beforeEach(async ({ page }) => {
  46  |   await page.goto('https://www.saucedemo.com');
  47  |   await page.fill('[data-test="username"]', 'standard_user');
  48  |   await page.fill('[data-test="password"]', 'secret_sauce');
  49  |   await page.click('[data-test="login-button"]');
  50  |   await expect(page).toHaveURL(/inventory/);
  51  | });
  52  | 
  53  | test('TC-05: adding one item shows 1 on the cart icon', async ({ page }) => {
  54  |   await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  55  |   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  56  | });
  57  | 
  58  | test('TC-06: removing an item takes it out of the cart', async ({ page }) => {
  59  |   await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  60  |   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  61  | 
  62  |   await page.click('[data-test="remove-sauce-labs-backpack"]');
  63  |   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
  64  | });
  65  | 
  66  | test('TC-15: checkout with an empty cart should be blocked', async ({ page }) => {
  67  |   test.fail(); // known bug (Bug Report 002): the site lets you continue
  68  |   await page.click('[data-test="shopping-cart-link"]');
  69  |   await page.click('[data-test="checkout"]');
  70  |   await expect(page).not.toHaveURL(/checkout-step-one/);
  71  | });
  72  | 
  73  | 
  74  | test('TC-12: logging out returns to the login page', async ({ page }) => {
  75  |   await page.goto('https://www.saucedemo.com');
  76  |   await page.fill('[data-test="username"]', 'standard_user');
  77  |   await page.fill('[data-test="password"]', 'secret_sauce');
  78  |   await page.click('[data-test="login-button"]');
  79  |   await page.click('#react-burger-menu-btn');
  80  |   await page.click('[data-test="logout-sidebar-link"]');
  81  |   await expect(page).toHaveURL('https://www.saucedemo.com/');
  82  |   await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  83  | });
  84  | 
  85  | test('TC-13: username without a password shows an error', async ({ page }) => {
  86  |   await page.fill('[data-test="username"]', 'standard_user');
  87  |   await page.click('[data-test="login-button"]');
  88  | 
  89  |   const error = page.locator('[data-test="error"]');
  90  |   await expect(error).toBeVisible();
  91  |   await expect(error).toContainText('Password is required');
  92  |   await expect(page).not.toHaveURL(/inventory/);
  93  | });
  94  | 
  95  | test('TC-14: password without a username shows an error', async ({ page }) => {
  96  |   await page.fill('[data-test="password"]', 'secret_sauce');
  97  |   await page.click('[data-test="login-button"]');
  98  | 
  99  |   const error = page.locator('[data-test="error"]');
  100 |   await expect(error).toBeVisible();
  101 |   await expect(error).toContainText('Username is required');
  102 |   await expect(page).not.toHaveURL(/inventory/);
  103 | });
```