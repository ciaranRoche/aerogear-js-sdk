import { KeycloakConfiguration } from "./configuration";
import { Keycloak } from "keycloak-js";
import { ServiceConfiguration } from "@aerogearservices/core";


export class AuthService{
    private keycloak: Keycloak;
    private keycloakConfig: KeycloakConfiguration;

    constructor(keycloak: Keycloak, serviceConfig: ServiceConfiguration){
        
        this.keycloakConfig = new KeycloakConfiguration(serviceConfig);
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
        let url: string = this.keycloakConfig.getHostUrl();
        let keycloak = Keycloak({
            url: 'http://keycloak-server/auth',
            realm: 'myrealm',
            clientId: 'myapp'
        });

        return keycloak;
    }
}