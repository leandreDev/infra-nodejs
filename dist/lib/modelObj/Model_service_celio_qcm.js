"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_celio_qcm = void 0;
const Model_service_1 = require("./Model_service");
/**
  service celio qcm
*/
class Model_service_celio_qcm extends Model_service_1.Model_service {
    /**
      service celio qcm
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_celio_qcm";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["serviceFidUrl"] != undefined) {
            this["serviceFidUrl"] = obj["serviceFidUrl"].toString();
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
    }
}
exports.Model_service_celio_qcm = Model_service_celio_qcm;
