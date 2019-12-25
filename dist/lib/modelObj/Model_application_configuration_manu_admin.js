"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  cond des comptoire de l'or admin
*/
class Model_application_configuration_manu_admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      cond des comptoire de l'or admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_manu_admin";
        if (obj["bddApiUrl"] != undefined) {
            this["bddApiUrl"] = obj["bddApiUrl"].toString();
        }
        if (obj["serviceUrl"] != undefined) {
            this["serviceUrl"] = obj["serviceUrl"].toString();
        }
    }
}
exports.Model_application_configuration_manu_admin = Model_application_configuration_manu_admin;
//# sourceMappingURL=Model_application_configuration_manu_admin.js.map