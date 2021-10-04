import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl: string) {
    await browser.url(appurl);
    await browser.maximizeWindow();
});

Then(/^I validate page header \"([^\"]*)\"$/, async function (headertext: string) {
    const header = await $('//h1');
    expect(header).toHaveText(headertext);
});

When(/^I enter firstname (.+) and (.+)$/, async function (fname: string, lname: string) {
    const firstname = await $('[name=firstname]');
    const lastname = await $('[name=lastname]');

    await firstname.setValue(fname);
    await lastname.setValue(lname);

    expect(firstname).toHaveValue(fname);
});

When(/^I select gender (.+) years (.+) favorite chai (.+) and (.+)$/, async function (gender: string, yrs: string, favchai: string, reason: string) {

    const gender_radio = await $$('[name=sex]');
    const experience_radio = await $$('[name=exp]');
    const favchai_checkbox = await $$('input[name*=Tea]');
    const whychai_checkbox = await $$('[name=tool]');

    gender_radio.forEach(async radioGender => {
        const value = await radioGender.getAttribute('value');
        if(value === gender) {
            await radioGender.click();
            return;
        }
    });

    experience_radio.forEach(async radioExp => {
        const value = await radioExp.getAttribute('value');
        if(value === yrs) {
            await radioExp.click();
            return;
        }
    });

    favchai_checkbox.forEach(async checkFavchai => {
        const value = await checkFavchai.getAttribute('value');
        if(value === favchai) {
            await checkFavchai.click();
            return;
        }
    });

    whychai_checkbox.forEach(async checkWhychai => {
        const value = await checkWhychai.getAttribute('value');
        if(value === reason) {
            await checkWhychai.click();
            return;
        }
    });
});

When(/^I select continent (.+) and commands (.+)$/, async function (continent: string, command: string) {
    const continent_dropdown = await $('#continents');
    const commands_multiselect = await $('#selenium_commands');

    await continent_dropdown.selectByVisibleText(continent);
    await commands_multiselect.selectByVisibleText(command);

    browser.pause(5000);
});

When(/^I click on submit button$/, async function () {
    const btnSubmit = await $('#submit');
    await btnSubmit.click();
});
