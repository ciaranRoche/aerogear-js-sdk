"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
/**
 * A class to represent the configuration options of the Keycloak singleThreadService
 */
var KeycloakConfiguration = /** @class */ (function () {
    /**
     * Create a new instance of the Keycloak configuration from the given instance of
     * ServiceConfig
     */
    function KeycloakConfiguration(config) {
        this.SERVER_URL_NAME = "auth-server-url";
        this.REALM_ID_NAME = "realm";
        this.RESOURCE_ID_NAME = "resource";
        this.TOKEN_HINT_FRAGMENT = "id_token_hint";
        this.REDIRECT_FRAGMENT = "redirect_uri";
        this.BASE_URL_TEMPLATE = "%s/realms/%s/protocol/openid-connect";
        this.LOGOUT_URL_TEMPLATE = "%s/logout?%s=%s&%s=%s";
        this.serverUrl = config.config.get(this.SERVER_URL_NAME) || "";
        this.realmId = config.config.get(this.REALM_ID_NAME) || "";
        this.resourceId = config.config.get(this.RESOURCE_ID_NAME) || "";
        this.baseUrl = "" + this.BASE_URL_TEMPLATE + this.serverUrl + this.realmId;
    }
    /**
     * Get the URI for the Keycloak authentication endpoint
     */
    KeycloakConfiguration.prototype.getAuthenticationEndpoint = function () {
        return new url_1.URL(this.baseUrl + "/auth");
    };
    /**
     * Get the URI for the token exchange endpoint
     */
    KeycloakConfiguration.prototype.getTokenEndpoint = function () {
        return new url_1.URL(this.baseUrl + "/token");
    };
    Object.defineProperty(KeycloakConfiguration.prototype, "getResourceId", {
        /**
         * Get the resource id
         */
        get: function () {
            return this.resourceId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the logout URL string
     */
    KeycloakConfiguration.prototype.getLogoutUrl = function (identityToken, redirectUri) {
        return "" + this.LOGOUT_URL_TEMPLATE + this.baseUrl + this.TOKEN_HINT_FRAGMENT + identityToken + this.REDIRECT_FRAGMENT + redirectUri;
    };
    Object.defineProperty(KeycloakConfiguration.prototype, "getHostUrl", {
        /**
         * Get the URL string of the Keycloak singleThreadService
         */
        get: function () {
            return this.serverUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeycloakConfiguration.prototype, "getRealmName", {
        /**
         * Get the realm name of the Keycloak singleThreadService
         */
        get: function () {
            return this.realmId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the URL where keys can be retrieved.
     */
    KeycloakConfiguration.prototype.getJwksUrl = function () {
        return this.baseUrl + "/certs";
    };
    /**
     * Returns the JWT Issuer
     */
    KeycloakConfiguration.prototype.getIssuer = function () {
        return "%s/realms/%s" + this.getHostUrl + this.getRealmName;
    };
    return KeycloakConfiguration;
}());
exports.KeycloakConfiguration = KeycloakConfiguration;
//# sourceMappingURL=KeycloakConfiguration.js.map