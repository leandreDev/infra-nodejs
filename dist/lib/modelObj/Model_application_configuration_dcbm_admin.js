"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_dcbm_admin = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  configiration de dcbm admin
*/
class Model_application_configuration_dcbm_admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      configiration de dcbm admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_dcbm_admin";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["uploadUrl"] != undefined) {
            this["uploadUrl"] = obj["uploadUrl"].toString();
        }
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
    }
}
exports.Model_application_configuration_dcbm_admin = Model_application_configuration_dcbm_admin;
