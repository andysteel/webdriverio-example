import { When, Then } from "@cucumber/cucumber";
import fs from 'fs'
import path from 'path'
import { DOWNLOAD_FOLDER_PATH } from "src/constants/path.const";
import assertions from "src/utils/assertions";
import fileUtils from "src/utils/fileutils";

When(/^I click on first file$/, async ()=> {
    const fileElement = $("//a[contains(@href, 'download')]");
    await fileElement.click();
    await browser.pause(8000);
})

Then(/^I validate downloaded file extension$/, async ()=> {
    const extensions = ['.jpg', '.txt', '.pdf', '.png', '.json', '.jpeg', '.zip']
    const files = fs.readdirSync(DOWNLOAD_FOLDER_PATH)
    files.forEach(file => {
        assertions.toContain(extensions, path.extname(file));
    })
    fileUtils.deleteDirectory(DOWNLOAD_FOLDER_PATH)
})