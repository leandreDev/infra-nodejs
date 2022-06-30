"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_celio_back_task = void 0;
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service celio back_task
*/
class Model_service_celio_back_task extends Model_service_1.Model_service {
    /**
      service celio back_task
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_celio_back_task";
        if (obj["fidBddUrl"] != undefined) {
            this["fidBddUrl"] = obj["fidBddUrl"].toString();
        }
        if (obj["qcmBddUrl"] != undefined) {
            this["qcmBddUrl"] = obj["qcmBddUrl"].toString();
        }
        if (obj["serviceFidUrl"] != undefined) {
            this["serviceFidUrl"] = obj["serviceFidUrl"].toString();
        }
        if (obj["siteId"] != undefined) {
            this["siteId"] = obj["siteId"].toString();
        }
        if (obj["secretToken"] != undefined) {
            this["secretToken"] = obj["secretToken"].toString();
        }
        if (obj["serverUrl"] != undefined) {
            this["serverUrl"] = obj["serverUrl"].toString();
        }
        if (obj["caPath"] != undefined) {
            this["caPath"] = obj["caPath"].toString();
        }
        if (obj["hybrisUrl"] != undefined) {
            this["hybrisUrl"] = obj["hybrisUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            this["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            this["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["accessTokenUrl"] != undefined) {
            this["accessTokenUrl"] = obj["accessTokenUrl"].toString();
        }
        if (obj["marketingCloudApisConf"] != undefined) {
            if (obj["marketingCloudApisConf"]._class) {
                this["marketingCloudApisConf"] = new Index[obj["marketingCloudApisConf"]._class](obj["marketingCloudApisConf"]);
            }
            else {
                this["marketingCloudApisConf"] = new Index["MarketingCloudApisConf"](obj["marketingCloudApisConf"]);
            }
        }
        if (obj["customerPrefix"] != undefined) {
            this["customerPrefix"] = obj["customerPrefix"].toString();
        }
    }
}
exports.Model_service_celio_back_task = Model_service_celio_back_task;
