var KeyCloak = require("keycloak-js");
var Promise = require("bluebird");

export class AuthService{
    static auth: any = {};

    currentUser(): Promise<any>{
        return new Promise(AuthService.auth.authz.loadUserProfile());
    }

    login(): Promise<any>{
        return new Promise(AuthService.auth.authz.login());
    }

    logout(): Promise<any>{
        return new Promise(AuthService.auth.authz.logout());
    }

    init(keycloakConfig: any) : Promise<any> {
        if(keycloakConfig){
            let keycloak = KeyCloak(keycloakConfig);

            return new Promise((resolve: any, reject: any) => {
                keycloak.init({ onLoad: 'login-required', flow: 'implicit' }).success(() => {
                    AuthService.auth.authz = keycloak;
                    AuthService.auth.logoutUrl = keycloak.authServerUrl + "/realms/" + keycloakConfig.realm + "/protocol/openid-connect/logout?redirect_uri=/";
                    resolve();
                }).error((err: any) => {
                    reject(err);
                });
            });
        }
        return new Promise((resolve: any, reject: any) => { return resolve() });
    }
}