import { Given, When, Then } from '@wdio/cucumber-framework';
import chaiPage from 'src/pages/register.page';
import { addLog } from 'src/utils/commands';

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl: string) {
    await browser.url(appurl);
    addLog(`Loading url ${appurl}`);
    await browser.maximizeWindow();
    addLog('Maximize window');
});

Then(/^I validate page header \"([^\"]*)\"$/, async function (headertext: string) {

    await  expect(chaiPage.getHeader()).toHaveText(headertext);
});

When(/^I enter firstname (.+) and (.+)$/, async function (fname: string, lname: string) {

    await chaiPage.enterFirstName(fname);
    await chaiPage.enterLastName(lname);

});

When(/^I select gender (.+) years (.+) favorite chai (.+) and (.+)$/, async function (gender: string, yrs: string, favchai: string, reason: string) {

    await chaiPage.selectGender(gender);
    await chaiPage.selectExperience(yrs);
    await chaiPage.selectFavChai(favchai);
    await chaiPage.selectReason(reason);

});

When(/^I select continent (.+) and commands (.+)$/, async function (continent: string, command: string) {

    await chaiPage.selectContinent(continent);
    await chaiPage.selectSeleniumContact(command);

    browser.pause(5000);
});

When(/^I click on submit button$/, async function () {
    await chaiPage.clickOnSubmitBtn();
});
