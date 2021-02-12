"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_AppConf_minds_up = void 0;
const _ = require("lodash");
const Index = require("./Index");
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
        if (obj["moduleProgress"] != undefined) {
            this["moduleProgress"] = new Boolean(obj["moduleProgress"]).valueOf();
        }
        if (obj["lang"] != undefined && obj["lang"] != null && _.isArray(obj["lang"])) {
            this["lang"] = obj["lang"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
        if (obj["collaborateurAnonyme"] != undefined) {
            this["collaborateurAnonyme"] = new Boolean(obj["collaborateurAnonyme"]).valueOf();
        }
        if (obj["emailValidator"] != undefined) {
            this["emailValidator"] = obj["emailValidator"].toString();
        }
        if (obj["emailValidatorErrorMessage"] != undefined) {
            this["emailValidatorErrorMessage"] = obj["emailValidatorErrorMessage"].toString();
        }
    }
}
exports.Model_AppConf_minds_up = Model_AppConf_minds_up;
