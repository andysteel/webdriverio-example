import { Given, When, Then } from '@wdio/cucumber-framework';
import chaiPage from '../pageobjects/register.page';

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl: string) {
    await browser.url(appurl);
    await browser.maximizeWindow();
});

Then(/^I validate page header \"([^\"]*)\"$/, async function (headertext: string) {

    await  expect(chaiPage.header).toHaveText(headertext);
});

When(/^I enter firstname (.+) and (.+)$/, async function (fname: string, lname: string) {

    await chaiPage.firstname.setValue(fname);
    await chaiPage.lastname.setValue(lname);

    await expect(chaiPage.firstname).toHaveValue(fname);
});

When(/^I select gender (.+) years (.+) favorite chai (.+) and (.+)$/, async function (gender: string, yrs: string, favchai: string, reason: string) {

    await chaiPage.selectOnMultiple(chaiPage.gender_radio, gender);
    await chaiPage.selectOnMultiple(chaiPage.experience_radio, yrs);
    await chaiPage.selectOnMultiple(chaiPage.favchai_checkbox, favchai);
    await chaiPage.selectOnMultiple(chaiPage.whychai_checkbox, reason);

});

When(/^I select continent (.+) and commands (.+)$/, async function (continent: string, command: string) {

    await chaiPage.continent_dropdown.selectByVisibleText(continent);
    await chaiPage.commands_multiselect.selectByVisibleText(command);

    browser.pause(5000);
});

When(/^I click on submit button$/, async function () {
    await chaiPage.btnSubmit.click();
});
