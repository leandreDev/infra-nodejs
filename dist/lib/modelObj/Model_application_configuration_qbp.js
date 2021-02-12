"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_qbp = void 0;
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
        if (obj["qbpFsoUrl"] != undefined) {
            this["qbpFsoUrl"] = obj["qbpFsoUrl"].toString();
        }
    }
}
exports.Model_application_configuration_qbp = Model_application_configuration_qbp;
//# sourceMappingURL=Model_application_configuration_qbp.js.map