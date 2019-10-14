"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
}
exports.Model_service_webAppConf = Model_service_webAppConf;
//# sourceMappingURL=Model_service_webAppConf.js.map