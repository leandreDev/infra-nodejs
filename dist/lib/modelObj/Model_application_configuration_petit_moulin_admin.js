"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_petit_moulin_admin = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  conf petit_moulin_admin
*/
class Model_application_configuration_petit_moulin_admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      conf petit_moulin_admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_petit_moulin_admin";
        if (obj["serviceUrl"] != undefined) {
            this["serviceUrl"] = obj["serviceUrl"].toString();
        }
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            this["fsoUrl"] = obj["fsoUrl"].toString();
        }
    }
}
exports.Model_application_configuration_petit_moulin_admin = Model_application_configuration_petit_moulin_admin;
//# sourceMappingURL=Model_application_configuration_petit_moulin_admin.js.map