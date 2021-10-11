import { click, setStringValue } from "../utils/commands";
import Page from "./page";

class UsersPage extends Page {

    private get url_textbox() { return $('#urlvalue') }
    private get ajax_btn() { return $('#submitajax') }
    private get success_element() { return $('.alert-success') }
    private get status_text() { return $('#statuspre') }
    private get output_area() { return $('#outputpre') }

    async openApp(pageurl: string) {
        await browser.url(pageurl);
    }

    async enterApiUrl(apiEndpoint: string) {
        await setStringValue(await this.url_textbox, apiEndpoint);
    }

    async clickOnAjaxBtn() {
        await click(await this.ajax_btn);
    }

    async getStatusText(): Promise<string> {
        await this.success_element.waitForDisplayed();
        return this.status_text.getText()
    }

    async getOutputText(): Promise<string> {
        return this.output_area.getText()
    }
}

export default new UsersPage();