"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_MarketingCloudApisConf = void 0;
const utils_1 = require("@leandredev/utils");
/**
  config pour MarketingCloudApis
*/
class Model_MarketingCloudApisConf extends utils_1.Base {
    /**
      config pour MarketingCloudApis
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "MarketingCloudApisConf";
        if (obj["accessTokenUrl"] != undefined) {
            this["accessTokenUrl"] = obj["accessTokenUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            this["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            this["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["account_id"] != undefined) {
            this["account_id"] = obj["account_id"].toString();
        }
        if (obj["subDomain"] != undefined) {
            this["subDomain"] = obj["subDomain"].toString();
        }
    }
}
exports.Model_MarketingCloudApisConf = Model_MarketingCloudApisConf;
