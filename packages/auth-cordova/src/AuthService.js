"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_1 = require("./configuration");
var keycloak_js_1 = __importDefault(require("keycloak-js"));
var AuthService = /** @class */ (function () {
    function AuthService(serviceConfig) {
        this.keycloakConfig = new configuration_1.KeycloakConfiguration(serviceConfig);
    }
    AuthService.prototype.currentUser = function () {
        AuthService.auth.authz.loadUserProfile();
    };
    AuthService.prototype.login = function () {
        AuthService.auth.authz.login();
    };
    AuthService.prototype.logout = function () {
        AuthService.auth.authz.logout();
    };
    AuthService.prototype.init = function (keycloakConfig) {
        if (keycloakConfig) {
            var keycloak_1 = keycloak_js_1.default(keycloakConfig);
            return new Promise(function (resolve, reject) {
                keycloak_1.init({ onLoad: 'login-required', flow: 'implicit' }).success(function () {
                    AuthService.auth.authz = keycloak_1;
                    AuthService.auth.logoutUrl = keycloak_1.authServerUrl + "/realms/" + keycloakConfig.realm + "/protocol/openid-connect/logout?redirect_uri=/";
                    resolve();
                }).error(function (err) {
                    reject(err);
                });
            });
        }
        return new Promise(function (resolve, reject) { return resolve(); });
    };
    AuthService.auth = {};
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map