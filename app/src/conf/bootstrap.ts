import {
    getDev,
    getRestApi,
    getTokenField,
    getWebsocketApi
} from '@/conf/env.ts';
import { syncSiteInfo } from '@/admin/api/info.ts';
import { setAxiosConfig } from '@/conf/api.ts';

export const version = '1.4.0'; // version of the current build
export const dev: boolean = getDev(); // is in development mode (for debugging, in localhost origin)
export const deploy: boolean = true; // is production environment (for api endpoint)
export const tokenField = getTokenField(deploy); // token field name for storing token

export const apiEndpoint: string = getRestApi(deploy); // api endpoint for rest api calls
export const websocketEndpoint: string = getWebsocketApi(deploy); // api endpoint for websocket calls

setAxiosConfig({
    endpoint: apiEndpoint,
    token: tokenField
});

syncSiteInfo();
