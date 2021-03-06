import { DeviceMetrics, Metrics } from "../model";

declare var window: any;
declare var document: any;

export class CordovaDeviceMetrics implements Metrics {

  public identifier = "device";

  /**
   * Get device metrics, to be called after deviceReady event
   *
   * It uses cordova-plugin-device plugin.
   * @returns {Promise<DeviceMetrics>} The device metrics
   */
  public collect(): Promise<DeviceMetrics> {
    return new Promise((resolve, reject) => {
      if (!document) {
        return Promise.reject(new Error("Metrics not running in browser environment"));
      }
      document.addEventListener("deviceready", () => {
        if (!window || !window.device) {
          return reject(
            "Missing required plugin to collect metrics. Verify the " +
            "@aerogear/cordova-plugin-aerogear-metrics plugin is installed."
          );
        }
        return resolve({
          platform: window.device.platform.toLowerCase(),
          platformVersion: window.device.version,
          device: window.device.model
        });
      }, false);
    });
  }
}
