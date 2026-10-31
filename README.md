# saucedemo-qa-project
WTC-D2MAYMYS


A manual and automated QA practice project testing the demo online shop at https://www.saucedemo.com.

## Purpose
To practise the full QA process: planning, writing test cases, running them, reporting bugs and automating tests.

## What I tested
- Login (valid, invalid, empty and locked-out users)
- Products page and cart
- Checkout form and order confirmation
- Logout

## Automated tests (Playwright)

Automated tests are in the `tests/` folder:
- `login.spec.js`: TC-01 to TC-04, TC-13, TC-14
- `cart.spec.js`: TC-05, TC-06, TC-15
- `logout.spec.js`: TC-12

TC-15 is marked as a known bug (Bug Report 002), so it passes as an expected failure.

### How to run them
```bash
npm install
npx playwright install chromium
npx playwright test
npx playwright show-report
```

## Project structure
- `docs/test-plan.md`: what I tested, what I didn't, and how
- `docs/test-cases.md`: step-by-step test cases with expected and actual results
- `docs/bug-reports.md`: bugs I found, with steps to reproduce
- `tests/`: automated tests (coming soon)

## Key findings
- The postal code field accepts letters and symbols (see Bug Report 001)
- [Add more here as you find them]

## Tools
- Manual testing
- Playwright (to be added)
- Git and GitHub

## Author
Lorraine Mkwebo, Software Engineering student at WeThinkCode_
Linkedin: https://www.linkedin.com/in/lorraine-mkwebo-38ab0b259/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS0NMlk2QSgqPtAmuIH3Jjw%3D%3D
