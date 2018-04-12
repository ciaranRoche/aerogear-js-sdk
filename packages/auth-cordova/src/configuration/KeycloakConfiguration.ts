
import { ServiceConfiguration } from "@aerogearservices/core";

export class KeycloakConfiguration {
    SERVER_URL_NAME: string = "auth-server-url";
    REALM_ID_NAME: string = "realm";
    RESOURCE_ID_NAME: string = "resource";
    TOKEN_HINT_FRAGMENT: string = "id_token_hint";
    REDIRECT_FRAGMENT: string = "redirect_uri";
    BASE_URL_TEMPLATE = "%s/realms/%s/protocol/openid-connect";
    LOGOUT_URL_TEMPLATE: string = "%s/logout?%s=%s&%s=%s";

    serverUrl: string;
    realmId: string;
    resourceId: string;
    baseUrl: string;

    constructor(config: ServiceConfiguration){        
        this.serverUrl = config.config.get(this.SERVER_URL_NAME) || '';
        this.realmId = config.config.get(this.REALM_ID_NAME) || '';
        this.resourceId = config.config.get(this.RESOURCE_ID_NAME) || '';
        this.baseUrl = config.config.get(this.BASE_URL_TEMPLATE) || '';
    }

}