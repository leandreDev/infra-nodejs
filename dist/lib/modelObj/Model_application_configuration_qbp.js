"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_qbp = void 0;
const Index = require("./Index");
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config qbp
*/
class Model_application_configuration_qbp extends Model_application_configuration_1.Model_application_configuration {
    /**
      config qbp
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_qbp";
        if (obj["qbpCustomerApi"] != undefined) {
            this["qbpCustomerApi"] = obj["qbpCustomerApi"].toString();
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
        if (obj["assUrl"] != undefined) {
            this["assUrl"] = obj["assUrl"].toString();
        }
        if (obj["featuresConf"] != undefined) {
            if (obj["featuresConf"]._class) {
                this["featuresConf"] = new Index[obj["featuresConf"]._class](obj["featuresConf"]);
            }
            else {
                this["featuresConf"] = new Index["QbpFeaturesConfiguration"](obj["featuresConf"]);
            }
        }
    }
}
exports.Model_application_configuration_qbp = Model_application_configuration_qbp;
