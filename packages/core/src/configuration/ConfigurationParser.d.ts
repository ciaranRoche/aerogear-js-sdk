import { AeroGearConfiguration, ServiceConfiguration } from "./";
/**
 * List of types of all supported services.
 */
export declare type ServiceType = "metrics" | "keycloak";
/**
 * Represents a configuration parser.
 * Class abstracts from where configuration will come from and expect
 */
export declare class ConfigurationParser {
    protected readonly configurations: ServiceConfiguration[];
    /**
     * @param config - top level configuration that will be send from server.
     */
    constructor(config: AeroGearConfiguration);
    getConfig(type: ServiceType): ServiceConfiguration | undefined;
}
