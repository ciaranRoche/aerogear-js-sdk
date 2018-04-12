/// <reference types="node" />
import { ServiceConfiguration } from "@aerogearservices/core";
import { URL } from "url";
/**
 * A class to represent the configuration options of the Keycloak singleThreadService
 */
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
    /**
     * Create a new instance of the Keycloak configuration from the given instance of
     * ServiceConfig
     */
    constructor(config: ServiceConfiguration);
    /**
     * Get the URI for the Keycloak authentication endpoint
     */
    getAuthenticationEndpoint(): URL;
    /**
     * Get the URI for the token exchange endpoint
     */
    getTokenEndpoint(): URL;
    /**
     * Get the resource id
     */
    readonly getResourceId: string;
    /**
     * Get the logout URL string
     */
    getLogoutUrl(identityToken: string, redirectUri: string): string;
    /**
     * Get the URL string of the Keycloak singleThreadService
     */
    readonly getHostUrl: string;
    /**
     * Get the realm name of the Keycloak singleThreadService
     */
    readonly getRealmName: string;
    /**
     * Returns the URL where keys can be retrieved.
     */
    getJwksUrl(): string;
    /**
     * Returns the JWT Issuer
     */
    getIssuer(): string;
}
