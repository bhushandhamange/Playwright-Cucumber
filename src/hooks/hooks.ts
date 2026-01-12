import { After, Before } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

// Before(async function () {
//     const browser: Browser = await chromium.launch({ headless: false });
//     const page: Page = await browser.newPage();
//     pageFixture.page = page;
// });

// After(async function () {
//     pageFixture.page.close();
//     await pageFixture.page.context().browser()?.close();
// });