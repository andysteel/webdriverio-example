import fs from 'fs';

class FileUtils {

    parseJsonFile(datapath: string) {
        const data = fs.readFileSync(datapath, 'utf-8');
        return JSON.parse(data);
    }

}
export default new FileUtils();