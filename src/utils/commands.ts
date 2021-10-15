import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from 'webdriverio';
import report from '@wdio/allure-reporter';

export const addLog = (log: string) => {
    report.addStep(`STEP: ${log}`);
    console.log(`STEP: ${log}`);
}

export const selectOnMultiple = async (elementArray: ChainablePromiseArray<ElementArray>, value: string) => {

    (await elementArray).forEach(async element => {
        const elementValue = await element.getAttribute('value');
        if(elementValue === value) {
            await element.click();
            addLog(`Selected value ${value}`);
            return;
        }
    });
}

export const setStringValue = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>,value: string) => {
    await element.setValue(value);
    addLog(`Entered value ${value}`);
}

export const selectByText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    await element.selectByVisibleText(text);
    addLog(`Selected by visible text ${text}`);
}

export const click = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await element.click();
    addLog(`Clicked on element ${await element.selector}`);
}