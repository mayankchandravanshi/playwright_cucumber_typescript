import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
  console.log('Before Suite');

});

Before(async () => {
  console.log('Launch Browser, performed before each individual test scenario');
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});

After(async ({ pickle, result }) => {
  console.log('Browser closed after each scenario, and result?.status');
  if (result?.status == Status.FAILED) {
    await page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: 'png',
    });
  }
  await page.close();
  await context.close();
  await browser.close();
});

AfterAll(async () => {
    console.log('After Suite');
});