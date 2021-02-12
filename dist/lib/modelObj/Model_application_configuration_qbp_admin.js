"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_qbp_admin = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config qbp admin
*/
class Model_application_configuration_qbp_admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      config qbp admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_qbp_admin";
        if (obj["qbpBddUrl"] != undefined) {
            this["qbpBddUrl"] = obj["qbpBddUrl"].toString();
        }
        if (obj["qbpAdminService"] != undefined) {
            this["qbpAdminService"] = obj["qbpAdminService"].toString();
        }
        if (obj["qbpFsoUrl"] != undefined) {
            this["qbpFsoUrl"] = obj["qbpFsoUrl"].toString();
        }
    }
}
exports.Model_application_configuration_qbp_admin = Model_application_configuration_qbp_admin;
