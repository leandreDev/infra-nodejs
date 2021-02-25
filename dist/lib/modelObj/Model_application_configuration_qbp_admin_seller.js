"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_qbp_admin_seller = void 0;
const Index = require("./Index");
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
        if (obj["fsoUrl"] != undefined) {
            this["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["mangoConf"] != undefined) {
            if (obj["mangoConf"]._class) {
                this["mangoConf"] = new Index[obj["mangoConf"]._class](obj["mangoConf"]);
            }
            else {
                this["mangoConf"] = new Index["MangoConf"](obj["mangoConf"]);
            }
        }
    }
}
exports.Model_application_configuration_qbp_admin_seller = Model_application_configuration_qbp_admin_seller;
