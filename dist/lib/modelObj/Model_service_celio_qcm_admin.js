"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_celio_qcm_admin = void 0;
const Model_service_1 = require("./Model_service");
/**
  service celio qcm admin
*/
class Model_service_celio_qcm_admin extends Model_service_1.Model_service {
    /**
      service celio qcm admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_celio_qcm_admin";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["serviceFidUrl"] != undefined) {
            this["serviceFidUrl"] = obj["serviceFidUrl"].toString();
        }
    }
}
exports.Model_service_celio_qcm_admin = Model_service_celio_qcm_admin;
