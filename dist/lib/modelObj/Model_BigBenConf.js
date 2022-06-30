"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_BigBenConf = void 0;
const utils_1 = require("@leandredev/utils");
/**
  Configuration de connexion BigBen
*/
class Model_BigBenConf extends utils_1.Base {
    /**
      Configuration de connexion BigBen
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "BigBenConf";
        /**
  Switch entre ancienne api et nouvelle api
  */
        this["isMarcoApiActive"] = true;
        if (obj["u"] != undefined) {
            this["u"] = obj["u"].toString();
        }
        if (obj["p"] != undefined) {
            this["p"] = obj["p"].toString();
        }
        if (obj["k"] != undefined) {
            this["k"] = obj["k"].toString();
        }
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["marcoApiKey"] != undefined) {
            this["marcoApiKey"] = obj["marcoApiKey"].toString();
        }
        if (obj["marcoApiUrl"] != undefined) {
            this["marcoApiUrl"] = obj["marcoApiUrl"].toString();
        }
        if (obj["isMarcoApiActive"] != undefined) {
            this["isMarcoApiActive"] = new Boolean(obj["isMarcoApiActive"]).valueOf();
        }
    }
}
exports.Model_BigBenConf = Model_BigBenConf;
