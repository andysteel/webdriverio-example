import { Given, Then } from '@wdio/cucumber-framework';

Given(/^I open the browser and load the url (.+)$/, async function(homeurl) {
    console.log('ENTROU !!!!');
    await browser.url(homeurl);
    await browser.maximizeWindow();
});

Then(/^I should see a header with text (.+)$/, async  function(headerText) {
    const header = await $('.heading');
    expect(await header.getText()).toEqual(headerText);
});