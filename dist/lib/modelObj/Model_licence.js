"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_licence = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
*/
class Model_licence extends utils_1.Base {
    /**
      représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "licence";
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                this["end_client"] = obj["end_client"];
            }
            else if (obj["end_client"]._id) {
                this["end_client"] = obj["end_client"]._id;
            }
        }
        if (obj["user"] != undefined) {
            if (_.isString(obj["user"])) {
                this["user"] = obj["user"];
            }
            else if (obj["user"]._id) {
                this["user"] = obj["user"]._id;
            }
        }
        if (obj["application_instance"] != undefined && obj["application_instance"] != null && _.isArray(obj["application_instance"])) {
            this["application_instance"] = obj["application_instance"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
                else if (value._bsontype && value._bsontype === 'ObjectID') {
                    return `${value}`;
                }
            });
        }
        if (obj["ressource"] != undefined && obj["ressource"] != null && _.isArray(obj["ressource"])) {
            this["ressource"] = obj["ressource"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
                else if (value._bsontype && value._bsontype === 'ObjectID') {
                    return `${value}`;
                }
            });
        }
        if (obj["licenceStoreRef"] != undefined) {
            this["licenceStoreRef"] = obj["licenceStoreRef"].toString();
        }
        if (obj["creationDate"] != undefined) {
            this["creationDate"] = new Date(obj["creationDate"]);
        }
        if (obj["usingDate"] != undefined) {
            this["usingDate"] = new Date(obj["usingDate"]);
        }
    }
}
exports.Model_licence = Model_licence;
