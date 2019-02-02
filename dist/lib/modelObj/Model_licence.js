"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["end_client"] != null && target["end_client"] != undefined) {
                let _end_client = target["end_client"];
                if (!_.isString(_end_client)) {
                    throw new Error(path + "end_client is not a string");
                }
            }
            if (target["user"] != null && target["user"] != undefined) {
                let _user = target["user"];
                if (!_.isString(_user)) {
                    throw new Error(path + "user is not a string");
                }
            }
            if (target["application_instance"] != null && target["application_instance"] != undefined) {
                target["application_instance"].forEach((_application_instance, index) => {
                    if (!_.isString(_application_instance)) {
                        throw new Error(path + "application_instance is not a string");
                    }
                });
            }
            if (target["ressource"] != null && target["ressource"] != undefined) {
                target["ressource"].forEach((_ressource, index) => {
                    if (!_.isString(_ressource)) {
                        throw new Error(path + "ressource is not a string");
                    }
                });
            }
            if (target["licenceStoreRef"] != null && target["licenceStoreRef"] != undefined) {
                let _licenceStoreRef = target["licenceStoreRef"];
                if (!_.isString(_licenceStoreRef)) {
                    throw new Error(path + "licenceStoreRef is not a string");
                }
            }
            if (isCompleteObj && (target["creationDate"] == null || target["creationDate"] == undefined)) {
                throw new Error(path + "creationDate is required");
            }
            if (target["creationDate"] != null && target["creationDate"] != undefined) {
                let _creationDate = target["creationDate"];
                if (!_.isDate(_creationDate)) {
                    throw new Error(path + "creationDate is not a Date");
                }
            }
            if (target["usingDate"] != null && target["usingDate"] != undefined) {
                let _usingDate = target["usingDate"];
                if (!_.isDate(_usingDate)) {
                    throw new Error(path + "usingDate is not a Date");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_licence.check(target, true, path).then(() => {
            return new Model_licence(target);
        });
    }
}
exports.Model_licence = Model_licence;
//# sourceMappingURL=Model_licence.js.map