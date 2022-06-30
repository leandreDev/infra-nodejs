"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_r3_admin = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config r3 admin
*/
class Model_application_configuration_r3_admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      config r3 admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_r3_admin";
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
exports.Model_application_configuration_r3_admin = Model_application_configuration_r3_admin;
