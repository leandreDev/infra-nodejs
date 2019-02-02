"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  c'est la configuration d'une application
*/
class Model_application_configuration extends utils_1.Base {
    /**
      c'est la configuration d'une application
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])) {
            this["services"] = obj["services"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["appName"] != undefined) {
            this["appName"] = obj["appName"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["services"] != null && target["services"] != undefined) {
                target["services"].forEach((_services, index) => {
                    if (!_.isString(_services)) {
                        throw new Error(path + "services is not a string");
                    }
                });
            }
            if (target["appName"] != null && target["appName"] != undefined) {
                let _appName = target["appName"];
                if (!_.isString(_appName)) {
                    throw new Error(path + "appName is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application_configuration.check(target, true, path).then(() => {
            return new Model_application_configuration(target);
        });
    }
}
exports.Model_application_configuration = Model_application_configuration;
//# sourceMappingURL=Model_application_configuration.js.map