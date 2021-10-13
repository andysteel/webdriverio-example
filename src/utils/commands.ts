import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from 'webdriverio';

export const selectOnMultiple = async (elementArray: ChainablePromiseArray<ElementArray>, value: string) => {

    (await elementArray).forEach(async element => {
        const elementValue = await element.getAttribute('value');
        if(elementValue === value) {
            await element.click();
            return;
        }
    });
}

export const setStringValue = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>,value: string) => {
    await element.setValue(value);
}

export const selectByText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    element.selectByVisibleText(text);
}

export const click = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await element.click();
}