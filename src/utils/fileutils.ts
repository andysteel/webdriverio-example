import fs from 'fs';

class FileUtils {

    parseJsonFile(datapath: string) {
        const data = fs.readFileSync(datapath, 'utf-8');
        return JSON.parse(data);
    }

    deleteDirectory(path: string) {
        if(fs.existsSync(path)) {
            fs.rmdirSync(path, {recursive: true})
        }
    }

}
export default new FileUtils();