import { ServiceConfiguration } from "@aerogearservices/core";
export declare class AuthService {
    private keycloakConfig;
    static auth: any;
    constructor(serviceConfig: ServiceConfiguration);
    currentUser(): void;
    login(): void;
    logout(): void;
    init(keycloakConfig: any): Promise<any>;
}
