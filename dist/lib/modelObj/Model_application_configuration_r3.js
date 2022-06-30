"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_r3 = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config r3
*/
class Model_application_configuration_r3 extends Model_application_configuration_1.Model_application_configuration {
    /**
      config r3
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_r3";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
    }
}
exports.Model_application_configuration_r3 = Model_application_configuration_r3;
