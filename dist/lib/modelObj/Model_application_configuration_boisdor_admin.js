"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_boisdor_admin = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config boisdor admin
*/
class Model_application_configuration_boisdor_admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      config boisdor admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_boisdor_admin";
        if (obj["boisdorBddUrl"] != undefined) {
            this["boisdorBddUrl"] = obj["boisdorBddUrl"].toString();
        }
        if (obj["boisdorAdminService"] != undefined) {
            this["boisdorAdminService"] = obj["boisdorAdminService"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            this["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["boisdorMailService"] != undefined) {
            this["boisdorMailService"] = obj["boisdorMailService"].toString();
        }
    }
}
exports.Model_application_configuration_boisdor_admin = Model_application_configuration_boisdor_admin;
