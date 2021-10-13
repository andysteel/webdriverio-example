import { click, selectByText, selectOnMultiple, setStringValue } from "src/utils/commands";
import Page from "./page";

class ChaiRegister extends Page {

    private get header() { return  $('//h1') }

    private get firstname() { return $('[name=firstname]')}
    private get lastname() { return $('[name=lastname]')}

    private get gender_radio() { return  $$('[name=sex]')}
    private get experience_radio() { return  $$('[name=exp]')}
    private get favchai_checkbox() { return  $$('input[name*=Tea]')}
    private get whychai_checkbox() { return  $$('[name=tool]')}

    private get continent_dropdown() { return $('#continents')}
    private get commands_multiselect() { return $('#selenium_commands')}

    private get btnSubmit() { return $('#submit')}


    getHeader() {
        return this.header;
    }

    async enterFirstName(fname: string) {
        await setStringValue(await this.firstname, fname);
    }

    async enterLastName (lname: string) {
        await setStringValue(await this.lastname, lname);
    }

    async selectGender(gender: string) {
        await selectOnMultiple(this.gender_radio, gender);
    }

    async selectExperience(years: string) {
        await selectOnMultiple(this.experience_radio, years);
    }

    async selectFavChai(chaiType: string) {
        await selectOnMultiple(this.favchai_checkbox, chaiType);
    }

    async selectReason(reason: string) {
        await selectOnMultiple(this.whychai_checkbox, reason);
    }

    async selectContinent(continent: string) {
        await selectByText(await this.continent_dropdown, continent);
    }

    async selectSeleniumContact(command: string) {
        await selectByText(await this.commands_multiselect, command);
    }

    async clickOnSubmitBtn() {
        await click(await this.btnSubmit);
    }
}

export default new ChaiRegister();