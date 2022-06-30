"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_r3_admin_seller = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config r3 admin
*/
class Model_application_configuration_r3_admin_seller extends Model_application_configuration_1.Model_application_configuration {
    /**
      config r3 admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_r3_admin_seller";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            this["fsoUrl"] = obj["fsoUrl"].toString();
        }
    }
}
exports.Model_application_configuration_r3_admin_seller = Model_application_configuration_r3_admin_seller;
