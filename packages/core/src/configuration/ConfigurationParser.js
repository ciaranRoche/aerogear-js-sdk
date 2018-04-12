"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_find_1 = __importDefault(require("lodash.find"));
/**
 * Represents a configuration parser.
 * Class abstracts from where configuration will come from and expect
 */
var ConfigurationParser = /** @class */ (function () {
    /**
     * @param config - top level configuration that will be send from server.
     */
    function ConfigurationParser(config) {
        this.configurations = config.services || [];
    }
    ConfigurationParser.prototype.getConfig = function (type) {
        return lodash_find_1.default(this.configurations, function (service) { return service.type === type; });
    };
    return ConfigurationParser;
}());
exports.ConfigurationParser = ConfigurationParser;
//# sourceMappingURL=ConfigurationParser.js.map