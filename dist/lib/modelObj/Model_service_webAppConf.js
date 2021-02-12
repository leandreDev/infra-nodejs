"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_webAppConf = void 0;
const Model_service_1 = require("./Model_service");
/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
class Model_service_webAppConf extends Model_service_1.Model_service {
    /**
      permet de générer les fichier de conf des app (css, js, ...)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_webAppConf";
        if (obj["infraBddUrl"] != undefined) {
            this["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["ssoBddUrl"] != undefined) {
            this["ssoBddUrl"] = obj["ssoBddUrl"].toString();
        }
        if (obj["ssoUrl"] != undefined) {
            this["ssoUrl"] = obj["ssoUrl"].toString();
        }
        if (obj["ssoIssuer"] != undefined) {
            this["ssoIssuer"] = obj["ssoIssuer"].toString();
        }
        if (obj["configurationUrl"] != undefined) {
            this["configurationUrl"] = obj["configurationUrl"].toString();
        }
    }
}
exports.Model_service_webAppConf = Model_service_webAppConf;
