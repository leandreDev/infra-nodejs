"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_celio = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  configuration générale application celio
*/
class Model_application_configuration_celio extends Model_application_configuration_1.Model_application_configuration {
    /**
      configuration générale application celio
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_celio";
        if (obj["fidServiceUrl"] != undefined) {
            this["fidServiceUrl"] = obj["fidServiceUrl"].toString();
        }
        if (obj["qcmServiceUrl"] != undefined) {
            this["qcmServiceUrl"] = obj["qcmServiceUrl"].toString();
        }
        if (obj["FidBDDUrl"] != undefined) {
            this["FidBDDUrl"] = obj["FidBDDUrl"].toString();
        }
        if (obj["QcmBDDUrl"] != undefined) {
            this["QcmBDDUrl"] = obj["QcmBDDUrl"].toString();
        }
    }
}
exports.Model_application_configuration_celio = Model_application_configuration_celio;
//# sourceMappingURL=Model_application_configuration_celio.js.map