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