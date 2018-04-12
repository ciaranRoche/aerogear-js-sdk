"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var v1_1 = __importDefault(require("uuid/v1"));
var publisher_1 = require("./publisher");
/**
 * AeroGear Services metrics service
 */
var MetricsService = /** @class */ (function () {
    function MetricsService(configuration) {
        this.configuration = configuration;
        this.publisher = new publisher_1.NetworkMetricsPublisher(configuration.url);
    }
    Object.defineProperty(MetricsService.prototype, "metricsPublisher", {
        get: function () {
            return this.publisher;
        },
        set: function (publisher) {
            this.publisher = publisher;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Publish metrics using predefined publisher
     *
     * @param - metrics instances that should be published
     */
    MetricsService.prototype.publish = function (metrics) {
        var payload = {
            clientId: this.getClientId(),
            timestamp: new Date().getTime(),
            data: {}
        };
        metrics.forEach(function (m) {
            payload.data[m.identifier] = m.collect();
        });
        return this.publisher.publish(payload);
    };
    /**
     * Generates or gets mobile client id
     */
    MetricsService.prototype.getClientId = function () {
        var clientId = this.getSavedClientId();
        if (!clientId) {
            clientId = v1_1.default();
            this.saveClientId(clientId);
        }
        return clientId;
    };
    return MetricsService;
}());
exports.MetricsService = MetricsService;
//# sourceMappingURL=MetricsService.js.map