
# Playwright with Cucumber
This is a BoilerPlate Framework for Playwright with Cucumber (BDD) using TypeScript.

## Prerequisites
- Node.js
- Visual Studio Code / IntelliJ IDEA
- If using vscode install the extensions,:
    - Cucumber
    - Playwright

## Setup the project

1. Create a fresh directory for the project.
2. Initialize a new Node.js project using ```npm init playwright```.
3. Install Playwright using ```npm init playwright@latest``` or ```npx playwright install```.
4. Install Cucumber using ```npm install -D @cucumber/cucumber```.
5. Install ts node using ```npm install -D ts-node```.
6. Create the folders to manage features and steps: 
    - Delete default folder and files -> ``` playwright.config.ts, tests & tests-examples```
    - Create folder ```tests/features```
    - Create folder ```tests/step-defs```

7. Run the tests using ```npm run cucumber``` for running feature files
8. Run the tests using ```npm run test``` for running JavaScript method having tag as ```test``` or ```test.only```.


```