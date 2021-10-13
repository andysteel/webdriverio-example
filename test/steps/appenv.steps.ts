import { Given, Then } from '@wdio/cucumber-framework';

Given(/^I open app url$/, async () => {
    await browser.maximizeWindow();
    await browser.url('/');
})

Then(/^I Retrieve browser title$/, async () => {
    const title = await browser.getTitle();
    console.log(`Application title ${title}`)
})