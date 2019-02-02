"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["mailPatern"] != null && target["mailPatern"] != undefined) {
                let _mailPatern = target["mailPatern"];
                if (!_.isString(_mailPatern)) {
                    throw new Error(path + "mailPatern is not a string");
                }
            }
            if (target["clientId"] != null && target["clientId"] != undefined) {
                let _clientId = target["clientId"];
                if (!_.isString(_clientId)) {
                    throw new Error(path + "clientId is not a string");
                }
            }
            if (target["redirectUri"] != null && target["redirectUri"] != undefined) {
                let _redirectUri = target["redirectUri"];
                if (!_.isString(_redirectUri)) {
                    throw new Error(path + "redirectUri is not a string");
                }
            }
            if (target["end_client"] != null && target["end_client"] != undefined) {
                let _end_client = target["end_client"];
                if (!_.isString(_end_client)) {
                    throw new Error(path + "end_client is not a string");
                }
            }
            if (target["application_instance"] != null && target["application_instance"] != undefined) {
                let _application_instance = target["application_instance"];
                if (!_.isString(_application_instance)) {
                    throw new Error(path + "application_instance is not a string");
                }
            }
            if (target["licence_service"] != null && target["licence_service"] != undefined) {
                let _licence_service = target["licence_service"];
                if (!_.isString(_licence_service)) {
                    throw new Error(path + "licence_service is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_mail_connexion_conf.check(target, true, path).then(() => {
            return new Model_mail_connexion_conf(target);
        });
    }
}
exports.Model_mail_connexion_conf = Model_mail_connexion_conf;
//# sourceMappingURL=Model_mail_connexion_conf.js.map