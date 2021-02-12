"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_qbp_admin_seller = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config qbp admin
*/
class Model_application_configuration_qbp_admin_seller extends Model_application_configuration_1.Model_application_configuration {
    /**
      config qbp admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_qbp_admin_seller";
        if (obj["qbpSellerApi"] != undefined) {
            this["qbpSellerApi"] = obj["qbpSellerApi"].toString();
        }
        if (obj["qbpBddUrl"] != undefined) {
            this["qbpBddUrl"] = obj["qbpBddUrl"].toString();
        }
        if (obj["qbpFsoUrl"] != undefined) {
            this["qbpFsoUrl"] = obj["qbpFsoUrl"].toString();
        }
    }
}
exports.Model_application_configuration_qbp_admin_seller = Model_application_configuration_qbp_admin_seller;
