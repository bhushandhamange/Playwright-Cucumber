import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';


Given('User is on QKart login page', async function () {
    await pageFixture.page.goto('https://crio-qkart-frontend-qa.vercel.app/');
    await pageFixture.page.click('text=Login');
});

When('User enters valid username and password', async function () {
    await pageFixture.page.fill('input[id="username"]', 'Bhushan');
    await pageFixture.page.fill('input[id="password"]', 'Bhushan');
});

When('User clicks on the login button', async function () {
    await pageFixture.page.click("//button[normalize-space()='Login to QKart']");
});

Then('User should be redirected to the homepage', async function () {
    await pageFixture.page.waitForSelector("//button[normalize-space()='Logout']");
    const username = await pageFixture.page.textContent("//p[@class='username-text']");
    expect(username).toContain('Bhushan');
});