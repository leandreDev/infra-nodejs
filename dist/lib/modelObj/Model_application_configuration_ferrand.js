"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_ferrand = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  la conf ferrand
*/
class Model_application_configuration_ferrand extends Model_application_configuration_1.Model_application_configuration {
    /**
      la conf ferrand
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_ferrand";
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
    }
}
exports.Model_application_configuration_ferrand = Model_application_configuration_ferrand;
//# sourceMappingURL=Model_application_configuration_ferrand.js.map