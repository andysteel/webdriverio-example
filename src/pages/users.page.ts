import { ApiCalls } from "src/enums/ApiCalls";
import { click, selectByText, setStringValue } from "src/utils/commands";
import Page from "./page";

class UsersPage extends Page {

    private get url_textbox() { return $('#urlvalue') }
    private get ajax_btn() { return $('#submitajax') }
    private get success_element() { return $('.alert-success') }
    private get status_text() { return $('#statuspre') }
    private get output_area() { return $('#outputpre') }
    private get method_dropdown() { return $('#httpmethod') }
    private get addParam_Btn() { return $('#addprambutton') }

    private get paramName1_textbox() { 
        return $("//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value]") 
    }
    private get paramValue1_textbox() { 
        return $("//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value]") 
    }
    private get paramName2_textbox() { 
        return $("(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[2]") 
    }
    private get paramValue2_textbox() { 
        return $("(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[2]") 
    }

    async openApp(pageurl: string) {
        await browser.url(pageurl);
    }

    async enterApiUrl(apiEndpoint: string) {
        await setStringValue(this.url_textbox, apiEndpoint);
    }

    async clickOnAjaxBtn() {
        await click(this.ajax_btn);
    }

    async getStatusText(): Promise<string> {
        await this.success_element.waitForDisplayed();
        return this.status_text.getText()
    }

    async getOutputText(): Promise<string> {
        return this.output_area.getText()
    }

    async selectMethod(apiType: ApiCalls) {
        await selectByText(this.method_dropdown, apiType)
    }

    async clickOnAddParamBtn() {
        await click(this.addParam_Btn)
    }

    async enterFirstParams(key: string, value:string) {
        await setStringValue(this.paramName1_textbox, key)
        await setStringValue(this.paramValue1_textbox, value)
    }

    async enterSecondParams(key: string, value:string) {
        await setStringValue(this.paramName2_textbox, key)
        await setStringValue(this.paramValue2_textbox, value)
    }
}

export default new UsersPage();