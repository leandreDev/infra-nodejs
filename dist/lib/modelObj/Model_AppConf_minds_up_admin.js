"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config de l'app minds up admin
*/
class Model_AppConf_minds_up_admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      config de l'app minds up admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "AppConf_minds_up_admin";
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["serviceMindsUpUrl"] != undefined) {
            this["serviceMindsUpUrl"] = obj["serviceMindsUpUrl"].toString();
        }
        if (obj["rgpd"] != undefined) {
            this["rgpd"] = obj["rgpd"].toString();
        }
        if (obj["uploadUrl"] != undefined) {
            this["uploadUrl"] = obj["uploadUrl"].toString();
        }
    }
}
exports.Model_AppConf_minds_up_admin = Model_AppConf_minds_up_admin;
//# sourceMappingURL=Model_AppConf_minds_up_admin.js.map