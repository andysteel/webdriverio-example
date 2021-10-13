import { Environments } from "../enums/Environments";

const google = 'https://www.google.com.br';
const wiki = 'https://www.wikipedia.org';

export const setEnv = (): string => {
    let appBaseUrl: string;
    if(process.env.NODE_ENV === Environments.DEV) {
        appBaseUrl = google;
        return appBaseUrl;
    } else if(process.env.NODE_ENV === Environments.HOMOLOG) {
        appBaseUrl = wiki;
        return appBaseUrl;
    }

    return null;
}