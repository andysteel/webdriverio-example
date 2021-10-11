import { Given, When, Then } from "@wdio/cucumber-framework";
import userPage from '../../src/pages/users.page';
import { BASE_URI } from '../../src/config/APIConfig';
import supertest from 'supertest';

const request = supertest(BASE_URI);
let apiResponse: any;
let apiStatusCode: number;

Given(/^I am on a page (.+)$/, async function (pageurl: string) {
    await userPage.openApp(pageurl);
});

When(/^I perform (.+) user search$/, async function (endpointurl: string) {
    await userPage.enterApiUrl(BASE_URI+endpointurl);
    await userPage.clickOnAjaxBtn();
});

When(/^I make get (.+) api call$/, async function (endpointurl: string ) {
    const response =  await request.get(endpointurl);

    apiResponse = response.body
    apiStatusCode = response.statusCode
});

Then(/^I validate the search result$/, async function () {
    const ui_status = await userPage.getStatusText();
    const ui_response = JSON.parse(await userPage.getOutputText());

    expect(ui_status).toContain(apiStatusCode.toString());
    expect(ui_response).toEqual(apiResponse);
    expect(ui_response.data.email).toEqual(apiResponse.data.email);
});