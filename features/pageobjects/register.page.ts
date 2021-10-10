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

    
    async selectOnMultiple(elementArray: Promise<ElementArrayImport>, value: string) {

        (await elementArray).forEach(async element => {
            const elementValue = await element.getAttribute('value');
            if(elementValue === value) {
                await element.click();
                return;
            }
        });
    }

    getHeader() {
        return this.header;
    }

    async enterFirstName(fname: string) {
        await this.firstname.setValue(fname);
    }

    async enterLastName (lname: string) {
        await this.lastname.setValue(lname);
    }

    async selectGender(gender: string) {
        await this.selectOnMultiple(this.gender_radio, gender);
    }

    async selectExperience(years: string) {
        await this.selectOnMultiple(this.experience_radio, years);
    }

    async selectFavChai(chaiType: string) {
        await this.selectOnMultiple(this.favchai_checkbox, chaiType);
    }

    async selectReason(reason: string) {
        await this.selectOnMultiple(this.whychai_checkbox, reason);
    }

    async selectContinent(continent: string) {
        await this.continent_dropdown.selectByVisibleText(continent);
    }

    async selectSeleniumContact(command: string) {
        await this.commands_multiselect.selectByVisibleText(command);
    }

    async clickOnSubmitBtn() {
        await this.btnSubmit.click();
    }
}

export default new ChaiRegister();