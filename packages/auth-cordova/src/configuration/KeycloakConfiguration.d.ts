import { ServiceConfiguration } from "@aerogearservices/core";
export declare class KeycloakConfiguration {
    SERVER_URL_NAME: string;
    REALM_ID_NAME: string;
    RESOURCE_ID_NAME: string;
    TOKEN_HINT_FRAGMENT: string;
    REDIRECT_FRAGMENT: string;
    BASE_URL_TEMPLATE: string;
    LOGOUT_URL_TEMPLATE: string;
    serverUrl: string;
    realmId: string;
    resourceId: string;
    baseUrl: string;
    constructor(config: ServiceConfiguration);
}
