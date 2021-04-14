![](https://github.com/sbmallik/cypress-selenium-demo/workflows/main/badge.svg?event=push)

# Cypress vs Selenium

Companion code for "Cypress vs Selenium WebDriver: Better, or just different?" talk

## How to Install

Run this:

```sh
npm ci # or use the more traditional `npm install`
npm run eyes:setup
```

## How to run the Selenium Tests

Run this:

```sh
npm run selenium
```

## How to run the Cypress Tests

Run this:

```sh
npm run cypress:open
```

This will open Cypress and let you run the individual tests.

Note that for the `todo-visuals.spec.js` tests, you need to have an Applitools API Key, which you can get for free by signing up [here](https://applitools.com/users/register), and setting your APPLITOOLS_API_KEY environment variable to it.

In addition please use the environment variable APPLITOOLS_BATCH_ID to any random number so that the test results are grouped together.

If you want to run _all_ the tests, headless, just run

```sh
npm run cypress:run
```
