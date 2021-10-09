import Page from "./page";

class ChaiRegister extends Page {

    get header() { return  $('//h1') }

    get firstname() { return $('[name=firstname]')}
    get lastname() { return $('[name=lastname]')}

    get gender_radio() { return  $$('[name=sex]')}
    get experience_radio() { return  $$('[name=exp]')}
    get favchai_checkbox() { return  $$('input[name*=Tea]')}
    get whychai_checkbox() { return  $$('[name=tool]')}

    get continent_dropdown() { return $('#continents')}
    get commands_multiselect() { return $('#selenium_commands')}

    get btnSubmit() { return $('#submit')}

    
    async selectOnMultiple(elementArray: Promise<ElementArrayImport>, value: string) {

        (await elementArray).forEach(async element => {
            const elementValue = await element.getAttribute('value');
            if(elementValue === value) {
                await element.click();
                return;
            }
        });
    }
}

export default new ChaiRegister();