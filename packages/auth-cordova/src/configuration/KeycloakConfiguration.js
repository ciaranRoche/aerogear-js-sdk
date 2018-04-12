"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@aerogearservices/core");
var KeycloakConfiguration = /** @class */ (function () {
    function KeycloakConfiguration(config) {
        this.SERVER_URL_NAME = "auth-server-url";
        this.REALM_ID_NAME = "realm";
        this.RESOURCE_ID_NAME = "resource";
        this.TOKEN_HINT_FRAGMENT = "id_token_hint";
        this.REDIRECT_FRAGMENT = "redirect_uri";
        this.BASE_URL_TEMPLATE = "%s/realms/%s/protocol/openid-connect";
        this.LOGOUT_URL_TEMPLATE = "%s/logout?%s=%s&%s=%s";
        this.serverUrl = core_1.ServiceConfiguration.serverUrl;
        this.realmId = core_1.ServiceConfiguration.realmId;
        this.resourceId = core_1.ServiceConfiguration.resourceId;
        this.baseUrl = core_1.ServiceConfiguration.baseUrl;
    }
    return KeycloakConfiguration;
}());
exports.KeycloakConfiguration = KeycloakConfiguration;
//# sourceMappingURL=KeycloakConfiguration.js.map