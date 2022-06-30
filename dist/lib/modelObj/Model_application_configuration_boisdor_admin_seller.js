"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_boisdor_admin_seller = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config boisdor admin
*/
class Model_application_configuration_boisdor_admin_seller extends Model_application_configuration_1.Model_application_configuration {
    /**
      config boisdor admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_boisdor_admin_seller";
        if (obj["boisdorSellerApi"] != undefined) {
            this["boisdorSellerApi"] = obj["boisdorSellerApi"].toString();
        }
        if (obj["boisdorBddUrl"] != undefined) {
            this["boisdorBddUrl"] = obj["boisdorBddUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            this["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["apiPublicUrl"] != undefined) {
            this["apiPublicUrl"] = obj["apiPublicUrl"].toString();
        }
        if (obj["boisdorMailService"] != undefined) {
            this["boisdorMailService"] = obj["boisdorMailService"].toString();
        }
    }
}
exports.Model_application_configuration_boisdor_admin_seller = Model_application_configuration_boisdor_admin_seller;
