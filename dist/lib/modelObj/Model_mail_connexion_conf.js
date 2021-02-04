"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mail_connexion_conf = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  associe un mail a une configuration de connexion sso+ app
*/
class Model_mail_connexion_conf extends utils_1.Base {
    /**
      associe un mail a une configuration de connexion sso+ app
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mail_connexion_conf";
        /**
  url du service de licence
  */
        this["licence_service"] = "https://licence-daesign.justplug.info/";
        if (obj["mailPatern"] != undefined) {
            this["mailPatern"] = obj["mailPatern"].toString();
        }
        if (obj["clientId"] != undefined) {
            this["clientId"] = obj["clientId"].toString();
        }
        if (obj["redirectUri"] != undefined) {
            this["redirectUri"] = obj["redirectUri"].toString();
        }
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                this["end_client"] = obj["end_client"];
            }
            else if (obj["end_client"]._id) {
                this["end_client"] = obj["end_client"]._id;
            }
        }
        if (obj["application_instance"] != undefined) {
            if (_.isString(obj["application_instance"])) {
                this["application_instance"] = obj["application_instance"];
            }
            else if (obj["application_instance"]._id) {
                this["application_instance"] = obj["application_instance"]._id;
            }
        }
        if (obj["licence_service"] != undefined) {
            this["licence_service"] = obj["licence_service"].toString();
        }
    }
}
exports.Model_mail_connexion_conf = Model_mail_connexion_conf;
//# sourceMappingURL=Model_mail_connexion_conf.js.map