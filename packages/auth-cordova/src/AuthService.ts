import { OIDCAuthenticatorImpl } from "./authenticator";
import { Keycloak } from "keycloak-js";


export class AuthService{
    private keycloak: Keycloak;

    constructor(keycloak: Keycloak){
        this.keycloak = this.init();
    } 

    currentUser(){
        return this.keycloak.authz.getCurrentUser();
    }

    login(){
        return this.keycloak.authz.login();
    }

    logout(){
        return this.keycloak.authz.logout();
    }

    init() :Keycloak{
        let keycloak = Keycloak({
            url: 'http://keycloak-server/auth',
            realm: 'myrealm',
            clientId: 'myapp'
        });

        return keycloak;
    }
}