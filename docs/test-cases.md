# Test Cases: SauceDemo (standard_user)

| ID | Area | Steps | Expected result | Actual result | Status |
|----|------|-------|-----------------|---------------|--------|
| TC-01 | Login | Log in with `standard_user` and the correct password | User lands on the products page | Taken to the products page | Pass |
| TC-02 | Login | Log in with `standard_user` and a wrong password | Wrong password shows an error, user stays on login page | when I log in with a wrong password it gave me the error message | Pass |
| TC-03 | Login | Click Login with both fields empty | Error message says username is required | Error message shown, could not log in | Pass |
| TC-04 | Login | Log in with `locked_out_user` | Error message says the user is locked out | Message says the user is locked out, could not log in | Pass |
| TC-05 | Cart | Add one item to the cart | Cart icon shows 1 | Cart icon shows 1 | Pass |
| TC-06 | Cart | Add an item, then click Remove | Item is removed and the cart count goes down | Item removed, cart count goes down | Pass |
| TC-07 | Checkout | Leave first name empty and click Continue | Error message says first name is required | Error message shown | Pass |
| TC-08 | Checkout | Leave last name empty and click Continue | Error message says last name is required | Error message shown | Pass |
| TC-09 | Checkout | Leave postal code empty and click Continue | Error message says postal code is required | Error message shown | Pass |
| TC-10 | Checkout | Enter letters (`abcde`) in the postal code | Error message says postal code is invalid | Error meesage shown | Pass |
| TC-11 | Checkout | Complete an order with valid details | Confirmation page says the order is complete | Taken to the confirmation page saying the order is complete | Pass |
| TC-12 | Logout | Log in, then log out from the menu | User returns to the login page | Taken to the sign in page | Pass |
| TC-13 | Login | Enter a username but leave the password empty, then click Login | Error message says password is required | Error message says password is required | Pass |
| TC-14 | Login | Enter a password but leave the username empty, then click Login | Error message says username is required | Error message says username is required | Pass |
| TC-15 | Checkout | Click Checkout with an empty cart | User is blocked or shown a message that the cart is empty | Taken to the checkout information page with no message | Fail |
| TC-16 | Checkout | Enter valid first name, last name and postal code, then Continue | User goes to the checkout overview page | Taken to the checkout overview page | Pass |
| TC-17 | Checkout | Click Cancel on the checkout overview page | User returns to the products page | User was logged out | Fail |
| TC-18 | Checkout | Click Finish on the checkout overview page | User goes to the checkout complete page | Taken to the checkout complete page | Pass |
| TC-19 | Navigation | Click Back Home on the checkout complete page | User returns to the products page | Taken to the products page | Pass |
| TC-20 | Checkout | Enter special characters (`!!@@`) in the postal code | Error message says postal code is invalid | when I enterd special characters it gave me error message | Pass |

**Automated with Playwright:** TC-01 to TC-06, TC-12 to TC-15. All other cases were run manually.

