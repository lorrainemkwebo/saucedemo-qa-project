# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> TC-01: standard_user can log in with the correct password
- Location: tests/login.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="username"]')

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic [ref=f1e4]:
    - banner [ref=f1e5]:
      - generic [ref=f1e6]:
        - generic [ref=f1e7]:
          - button "Open Menu" [ref=f1e8] [cursor=pointer]
          - img "Open Menu" [ref=f1e9]
        - generic [ref=f1e10]: Swag Labs
        - button "Cart, empty" [ref=f1e13]
      - generic [ref=f1e14]:
        - generic [ref=f1e15]: Products
        - generic [ref=f1e17] [cursor=pointer]:
          - generic [ref=f1e18]: Name (A to Z)
          - combobox "Sort products" [ref=f1e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=f1e20]:
      - generic [ref=f1e23]:
        - generic [ref=f1e24]:
          - button "View details for Sauce Labs Backpack" [ref=f1e26] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=f1e27]
          - generic [ref=f1e28]:
            - generic [ref=f1e29]:
              - button "View details for Sauce Labs Backpack" [ref=f1e30] [cursor=pointer]:
                - generic [ref=f1e31]: Sauce Labs Backpack
              - generic [ref=f1e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=f1e33]:
              - generic [ref=f1e34]: $29.99
              - button "Add to cart" [ref=f1e35] [cursor=pointer]
        - generic [ref=f1e36]:
          - button "View details for Sauce Labs Bike Light" [ref=f1e38] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=f1e39]
          - generic [ref=f1e40]:
            - generic [ref=f1e41]:
              - button "View details for Sauce Labs Bike Light" [ref=f1e42] [cursor=pointer]:
                - generic [ref=f1e43]: Sauce Labs Bike Light
              - generic [ref=f1e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=f1e45]:
              - generic [ref=f1e46]: $9.99
              - button "Add to cart" [ref=f1e47] [cursor=pointer]
        - generic [ref=f1e48]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=f1e50] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=f1e51]
          - generic [ref=f1e52]:
            - generic [ref=f1e53]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=f1e54] [cursor=pointer]:
                - generic [ref=f1e55]: Sauce Labs Bolt T-Shirt
              - generic [ref=f1e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=f1e57]:
              - generic [ref=f1e58]: $15.99
              - button "Add to cart" [ref=f1e59] [cursor=pointer]
        - generic [ref=f1e60]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=f1e62] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=f1e63]
          - generic [ref=f1e64]:
            - generic [ref=f1e65]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=f1e66] [cursor=pointer]:
                - generic [ref=f1e67]: Sauce Labs Fleece Jacket
              - generic [ref=f1e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=f1e69]:
              - generic [ref=f1e70]: $49.99
              - button "Add to cart" [ref=f1e71] [cursor=pointer]
        - generic [ref=f1e72]:
          - button "View details for Sauce Labs Onesie" [ref=f1e74] [cursor=pointer]:
            - img "Sauce Labs Onesie" [ref=f1e75]
          - generic [ref=f1e76]:
            - generic [ref=f1e77]:
              - button "View details for Sauce Labs Onesie" [ref=f1e78] [cursor=pointer]:
                - generic [ref=f1e79]: Sauce Labs Onesie
              - generic [ref=f1e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=f1e81]:
              - generic [ref=f1e82]: $7.99
              - button "Add to cart" [ref=f1e83] [cursor=pointer]
        - generic [ref=f1e84]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=f1e86] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=f1e87]
          - generic [ref=f1e88]:
            - generic [ref=f1e89]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=f1e90] [cursor=pointer]:
                - generic [ref=f1e91]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=f1e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=f1e93]:
              - generic [ref=f1e94]: $15.99
              - button "Add to cart" [ref=f1e95] [cursor=pointer]
  - contentinfo [ref=f1e96]:
    - list [ref=f1e97]:
      - listitem [ref=f1e98]:
        - link "X" [ref=f1e99] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=f1e100]:
        - link "Facebook" [ref=f1e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=f1e102]:
        - link "LinkedIn" [ref=f1e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=f1e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 8   |   await page.fill('[data-test="username"]', 'standard_user');
      |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
  9   |   await page.fill('[data-test="password"]', 'secret_sauce');
  10  |   await page.click('[data-test="login-button"]');
  11  |   await expect(page).toHaveURL(/inventory/);
  12  | });
  13  | 
  14  | test('TC-02: wrong password shows an error and stays on the login page', async ({ page }) => {
  15  |   await page.fill('[data-test="username"]', 'standard_user');
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