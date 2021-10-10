export const selectOnMultiple = async (elementArray: Promise<ElementArrayImport>, value: string) => {

    (await elementArray).forEach(async element => {
        const elementValue = await element.getAttribute('value');
        if(elementValue === value) {
            await element.click();
            return;
        }
    });
}

export const setStringValue = async (element: WebdriverIO.Element,value: string) => {
    await element.setValue(value);
}

export const selectByText = async (element: WebdriverIO.Element, text: string) => {
    element.selectByVisibleText(text);
}

export const click = async (element: WebdriverIO.Element) => {
    await element.click();
}