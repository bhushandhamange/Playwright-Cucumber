import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';


When('User selects a {string} from the homepage and clicks on Add to Cart button', async function (string) {
    await pageFixture.page.waitForSelector("//p[contains(text(),'"+ string +"')]");
    await pageFixture.page.click("//p[contains(text(),'"+ string +"')]//../..//button")
});

Then('The {string} should be added to the cart', async function (string) {
    const productAdded = await pageFixture.page.locator("//button[text()='Checkout']//..//..//div/div[1]/div[2]/div[1]").textContent();
    expect(productAdded).toContain(string);
});

When('User navigates to the cart page', async function () {
    await pageFixture.page.click("//button[text()='Checkout']");
});

Then('The cart should display the added {string} with correct details', async function (string) {
    const cartProduct = await pageFixture.page.locator("//div[@class='MuiBox-root css-1gjj37g']").textContent();
    expect(cartProduct).toContain(string);
});

