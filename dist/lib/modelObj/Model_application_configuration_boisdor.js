"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_boisdor = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config boisdor
*/
class Model_application_configuration_boisdor extends Model_application_configuration_1.Model_application_configuration {
    /**
      config boisdor
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_boisdor";
        if (obj["boisdorCustomerApi"] != undefined) {
            this["boisdorCustomerApi"] = obj["boisdorCustomerApi"].toString();
        }
        if (obj["boisdorBddUrl"] != undefined) {
            this["boisdorBddUrl"] = obj["boisdorBddUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            this["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["payementUrl"] != undefined) {
            this["payementUrl"] = obj["payementUrl"].toString();
        }
    }
}
exports.Model_application_configuration_boisdor = Model_application_configuration_boisdor;
