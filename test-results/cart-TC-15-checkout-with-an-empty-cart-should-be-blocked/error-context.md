# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> TC-15: checkout with an empty cart should be blocked
- Location: tests/cart.spec.js:24:1

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /checkout-step-one/
Received string: "https://www.saucedemo.com/checkout-step-one.html"
Timeout: 5000ms

Call log:
  - Expect "not toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/checkout-step-one.html"

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, empty"
  - text: "Checkout: Your Information"
- main:
  - form "Checkout information":
    - textbox "First Name"
    - textbox "Last Name"
    - textbox "Zip/Postal Code"
    - button "Cancel"
    - button "Continue"
- contentinfo:
  - list:
    - listitem:
      - link "X":
        - /url: https://x.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.beforeEach(async ({ page }) => {
  4  |   await page.goto('https://www.saucedemo.com');
  5  |   await page.fill('[data-test="username"]', 'standard_user');
  6  |   await page.fill('[data-test="password"]', 'secret_sauce');
  7  |   await page.click('[data-test="login-button"]');
  8  |   await expect(page).toHaveURL(/inventory/);
  9  | });
  10 | 
  11 | test('TC-05: adding one item shows 1 on the cart icon', async ({ page }) => {
  12 |   await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  13 |   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  14 | });
  15 | 
  16 | test('TC-06: removing an item takes it out of the cart', async ({ page }) => {
  17 |   await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  18 |   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  19 | 
  20 |   await page.click('[data-test="remove-sauce-labs-backpack"]');
  21 |   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
  22 | });
  23 | 
  24 | test('TC-15: checkout with an empty cart should be blocked', async ({ page }) => {
  25 |   test.fail(); // known bug (Bug Report 002): the site lets you continue
  26 |   await page.click('[data-test="shopping-cart-link"]');
  27 |   await page.click('[data-test="checkout"]');
> 28 |   await expect(page).not.toHaveURL(/checkout-step-one/);
     |                          ^ Error: expect(page).not.toHaveURL(expected) failed
  29 | });
```