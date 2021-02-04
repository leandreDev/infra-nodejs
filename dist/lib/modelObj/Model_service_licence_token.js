"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_licence_token = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  c'est un service en charge de valider les licences et retourner les configurations des applications web
*/
class Model_service_licence_token extends Model_service_1.Model_service {
    /**
      c'est un service en charge de valider les licences et retourner les configurations des applications web
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_licence_token";
        if (obj["licenceUrl"] != undefined) {
            this["licenceUrl"] = obj["licenceUrl"].toString();
        }
        if (obj["application_instanceUrl"] != undefined) {
            this["application_instanceUrl"] = obj["application_instanceUrl"].toString();
        }
        if (obj["tockenDuration"] != undefined) {
            this["tockenDuration"] = new Number(obj["tockenDuration"]).valueOf();
        }
        if (obj["sso_well-known"] != undefined) {
            this["sso_well-known"] = obj["sso_well-known"].toString();
        }
        if (obj["certificates"] != undefined && obj["certificates"] != null && _.isArray(obj["certificates"])) {
            this["certificates"] = obj["certificates"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["end_clientUrl"] != undefined) {
            this["end_clientUrl"] = obj["end_clientUrl"].toString();
        }
    }
}
exports.Model_service_licence_token = Model_service_licence_token;
//# sourceMappingURL=Model_service_licence_token.js.map