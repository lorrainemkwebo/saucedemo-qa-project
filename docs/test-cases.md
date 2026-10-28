# Test Cases: SauceDemo

| ID | Area | Steps | Expected result | Actual result | Status |
|----|------|-------|-----------------|---------------|--------|
| TC-01 | Login | Log in with `standard_user` and the correct password | User lands on the products page | Taken to the products page | Pass |
| TC-02 | Login | Log in with `standard_user` and a wrong password | Error message is shown, user stays on login page | I got the error message, password did not match and i could not go through to the products page | Pass  |
| TC-03 | Login | Click Login with both fields empty | Error message says username is required | Error message shown, could not log in | Pass |
| TC-04 | Login | Log in with `locked_out_user` | Error message says the user is locked out | Message says the user is locked out, could not log in | Pass |
| TC-05 | Cart | Add one item to the cart | Cart icon shows 1 | | |
| TC-06 | Cart | Add an item, then click Remove | Item is removed and the cart count goes down | | |
| TC-07 | Checkout | Leave first name empty and click Continue | Error message says first name is required | | |
| TC-08 | Checkout | Leave last name empty and click Continue | Error message says last name is required | | |
| TC-09 | Checkout | Leave postal code empty and click Continue | Error message says postal code is required | | |
| TC-10 | Checkout | Enter letters (`abcde`) in the postal code | Error message says postal code is invalid | | |
| TC-11 | Checkout | Complete an order with valid details | Confirmation page says the order is complete | | |
| TC-12 | Logout | Log in, then log out from the menu | User returns to the login page | | |