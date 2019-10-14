"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config de l'app minds up
*/
class Model_AppConf_minds_up extends Model_application_configuration_1.Model_application_configuration {
    /**
      config de l'app minds up
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "AppConf_minds_up";
        /**
  définie si le module repo est accéssible
  */
        this["moduleRepo"] = true;
        if (obj["introTitle"] != undefined) {
            this["introTitle"] = obj["introTitle"].toString();
        }
        if (obj["introText"] != undefined) {
            this["introText"] = obj["introText"].toString();
        }
        if (obj["videoUrl"] != undefined) {
            this["videoUrl"] = obj["videoUrl"].toString();
        }
        if (obj["rgpd"] != undefined) {
            this["rgpd"] = obj["rgpd"].toString();
        }
        if (obj["serviceMindsUpUrl"] != undefined) {
            this["serviceMindsUpUrl"] = obj["serviceMindsUpUrl"].toString();
        }
        if (obj["managerObservable"] != undefined) {
            this["managerObservable"] = new Boolean(obj["managerObservable"]).valueOf();
        }
        if (obj["managerAutoExchange"] != undefined) {
            this["managerAutoExchange"] = new Boolean(obj["managerAutoExchange"]).valueOf();
        }
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["module360"] != undefined) {
            this["module360"] = new Boolean(obj["module360"]).valueOf();
        }
        if (obj["moduleRepo"] != undefined) {
            this["moduleRepo"] = new Boolean(obj["moduleRepo"]).valueOf();
        }
    }
}
exports.Model_AppConf_minds_up = Model_AppConf_minds_up;
//# sourceMappingURL=Model_AppConf_minds_up.js.map