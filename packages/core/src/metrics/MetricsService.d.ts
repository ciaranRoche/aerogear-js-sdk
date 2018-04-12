import { ServiceConfiguration } from "../configuration";
import { Metrics } from "./model";
import { MetricsPublisher } from "./publisher";
/**
 * AeroGear Services metrics service
 */
export declare abstract class MetricsService {
    private readonly configuration;
    private publisher;
    constructor(configuration: ServiceConfiguration);
    metricsPublisher: MetricsPublisher;
    /**
     * Collect metrics for all active metrics collectors
     * Send data using metrics publisher
     */
    abstract sendAppAndDeviceMetrics(): Promise<any>;
    /**
     * Publish metrics using predefined publisher
     *
     * @param - metrics instances that should be published
     */
    publish(metrics: Metrics[]): Promise<any>;
    /**
     * Generates or gets mobile client id
     */
    getClientId(): string;
    protected abstract getSavedClientId(): string;
    protected abstract saveClientId(id: string): void;
}
