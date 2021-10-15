import { Given, When, Then } from "@wdio/cucumber-framework";
import userPage from 'src/pages/users.page';
import { BASE_URI } from 'src/config/APIConfig';
import supertest from 'supertest';
import { ApiCalls } from 'src/enums/ApiCalls';
import assertions from 'src/utils/assertions';

const request = supertest(BASE_URI);
let response: supertest.Response;

const payload = {
    'name': 'sadab',
    'job': 'tester'
}

Given(/^I am on page (.+)$/, async function (pageurl: string) {
    await userPage.openApp(pageurl);
});

When(/^I perform (.+) user search$/, async function (endpointurl: string) {
    await userPage.enterApiUrl(BASE_URI+endpointurl);
    await userPage.clickOnAjaxBtn();
});

When(/^I make get (.+) api call$/, async function (endpointurl: string ) {
    response =  await request.get(endpointurl);
});

Then(/^I validate the search result$/, async function () {
    const ui_status = await userPage.getStatusText();
    const ui_response = JSON.parse(await userPage.getOutputText());

    assertions.toContain(ui_status, response.statusCode.toString());
    assertions.toEqual(ui_response, response.body);
    assertions.toEqual(ui_response.data.email, response.body.data.email);

});

When(/^I perform create use search for api (.+)$/, async (service: string) => {
    await userPage.selectMethod(ApiCalls.POST);
    await userPage.enterApiUrl(BASE_URI + service);
    await userPage.clickOnAddParamBtn();
    await userPage.enterFirstParams("name", payload.name);
    await userPage.clickOnAddParamBtn();
    await userPage.enterSecondParams("job", payload.job);
    await userPage.clickOnAjaxBtn();
})

When(/^I make post (.+) api call$/, async (endpoint: string) => {

    response = await request
                    .post(endpoint)
                    .send(payload)
                    .set('content-type', 'application/json');
})

Then(/^I validate the create user search result$/, async () => {
    const ui_status = await userPage.getStatusText();
    const ui_response = JSON.parse(await userPage.getOutputText());

    assertions.toContain(ui_status, response.statusCode.toString());
    assertions.toEqual(ui_response.name, response.body.name);
})