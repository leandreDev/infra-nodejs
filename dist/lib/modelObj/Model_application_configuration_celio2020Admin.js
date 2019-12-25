"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  conf de l'app celio 2020
*/
class Model_application_configuration_celio2020Admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      conf de l'app celio 2020
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_celio2020Admin";
        if (obj["serviceBddUrl"] != undefined) {
            this["serviceBddUrl"] = obj["serviceBddUrl"].toString();
        }
    }
}
exports.Model_application_configuration_celio2020Admin = Model_application_configuration_celio2020Admin;
//# sourceMappingURL=Model_application_configuration_celio2020Admin.js.map