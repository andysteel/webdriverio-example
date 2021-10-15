import { ChainablePromiseElement } from 'webdriverio';
import { addLog } from './commands';

class Assertions {

    toContain(actual: string | string[], expected: string) {
        expect(actual).toContain(expected);
        addLog(`Assertion >> ${actual} to contain ${expected}`);
    }

    toEqual(actual: string, expected: string) {
        expect(actual).toEqual(expected);
        addLog(`Assertion >> ${actual} to equal ${expected}`);
    }

    async toHaveText(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, expectedText: string) {
        await expect(element).toHaveText(expectedText);
        addLog(`Assertion >> ${await element.selector} to have text ${expectedText}`);
    }

    async toBeExisting(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) {
        await expect(element).toBeExisting();
        addLog(`Assertion >> ${await element.selector} exists`);
    }

    async toHaveTextContain(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, expectedText: string) {
        await expect(element).toHaveTextContaining(expectedText);
        addLog(`Assertion >> ${await element.selector} to have text containing ${expectedText}`);
    }
}

export default new Assertions;