import { Given, When, Then } from '@wdio/cucumber-framework';
import assertions from 'src/utils/assertions';

import LoginPage from 'src/pages/login.page';
import SecurePage from 'src/pages/secure.page';

const pages = {
    login: LoginPage
}


Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await assertions.toBeExisting(SecurePage.flashAlert);
    await assertions.toHaveTextContain(SecurePage.flashAlert, message);
});

