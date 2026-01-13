import { After, AfterAll, AfterStep, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page: Page;
let context: BrowserContext;

BeforeAll(async function () {
    console.log("----- Launching Browser -----");
    browser = await chromium.launch({ headless: false });
});

Before(async function () {
    console.log("----- Creating New Context and Page -----");
    context = await browser.newContext();
    page = await context.newPage();
    pageFixture.page = page;
});

After(async function ({pickle, result}) {
    //Screenshot only if scenario fails
    // if(result?.status == Status.FAILED){
    //     const screenshot = await pageFixture.page.screenshot({ path: `test-result/screenshots/${pickle.name.replace(/ /g, "_")}.png`, fullPage: true });
    //     this.attach(screenshot, "image/png");
    // }

    //Screenshot after every scenario
    // const screenshot = await pageFixture.page.screenshot({ path: `test-result/screenshots/${pickle.name.replace(/ /g, "_")}.png`, fullPage: true });
    // this.attach(screenshot, "image/png");

    console.log("----- Closing Page and Context -----");
    pageFixture.page.close();
    await context.close();
});

AfterStep(async function ({pickle}) {
    console.log("----- Taking Screenshot After Step -----");
    const screenshot = await pageFixture.page.screenshot({ path: `test-result/screenshots/${pickle.name.replace(/ /g, "_")}.png`, fullPage: true });
    this.attach(screenshot, "image/png");
});

AfterAll(async function () {
    console.log("----- Closing Browser -----");
    await browser.close();
});