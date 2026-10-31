# Bug Report 001: Postal code accepts letters and symbols

**Site:** https://www.saucedemo.com
**User:** standard_user
**Severity:** Low to Medium
**Status:** Open

## Steps to reproduce
1. Log in as `standard_user`.
2. Add any item to the cart and open the cart.
3. Click Checkout.
4. Enter a first name and last name.
5. In the postal code field, enter letters (for example: `abcde`).
6. Click Continue.

## Expected result
An error message says the postal code is invalid.

## Actual result
The form accepts the input and moves to the next page.

## Notes
Try symbols (`!!@@`) and a very long value too, and note what happens.

## Bug Report 003: Cancel on the checkout overview logs the user out

**Site:** https://www.saucedemo.com
**User:** standard_user
**Severity:** Medium
**Status:** Open

## Steps to reproduce
1. Log in as `standard_user`.
2. Add an item to the cart and click Checkout.
3. Enter a first name, last name and postal code, then click Continue.
4. On the checkout overview page, click Cancel.

## Expected result
The user returns to the products page and stays logged in.

## Actual result
The user is logged out and taken to the login page.

## Related test case
TC-17