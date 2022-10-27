"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_dcbm = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config DCBM
*/
class Model_application_configuration_dcbm extends Model_application_configuration_1.Model_application_configuration {
    /**
      config DCBM
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_dcbm";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
    }
}
exports.Model_application_configuration_dcbm = Model_application_configuration_dcbm;
