"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_MangoConf = void 0;
const utils_1 = require("@hfdev/utils");
/**
  Données de configuration
*/
class Model_MangoConf extends utils_1.Base {
    /**
      Données de configuration
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "MangoConf";
        if (obj["clientId"] != undefined) {
            this["clientId"] = obj["clientId"].toString();
        }
        if (obj["version"] != undefined) {
            this["version"] = obj["version"].toString();
        }
        if (obj["apiKey"] != undefined) {
            this["apiKey"] = obj["apiKey"].toString();
        }
        if (obj["serverUrl"] != undefined) {
            this["serverUrl"] = obj["serverUrl"].toString();
        }
        if (obj["paymentRedirectUrl"] != undefined) {
            this["paymentRedirectUrl"] = obj["paymentRedirectUrl"].toString();
        }
        if (obj["clientUserId"] != undefined) {
            this["clientUserId"] = obj["clientUserId"].toString();
        }
    }
}
exports.Model_MangoConf = Model_MangoConf;
