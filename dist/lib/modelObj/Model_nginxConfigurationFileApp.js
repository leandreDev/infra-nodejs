"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  description d'un fichier de configuration nginx
*/
class Model_nginxConfigurationFileApp extends utils_1.Base {
    /**
      description d'un fichier de configuration nginx
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "nginxConfigurationFileApp";
        if (obj["suffix"] != undefined) {
            this["suffix"] = obj["suffix"].toString();
        }
        if (obj["template"] != undefined) {
            this["template"] = obj["template"].toString();
        }
        if (obj["applications"] != undefined && obj["applications"] != null && _.isArray(obj["applications"])) {
            this["applications"] = obj["applications"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["clients"] != undefined && obj["clients"] != null && _.isArray(obj["clients"])) {
            this["clients"] = obj["clients"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["suffix"] != null && target["suffix"] != undefined) {
                let _suffix = target["suffix"];
                if (!_.isString(_suffix)) {
                    throw new Error(path + "suffix is not a string");
                }
                if (!_suffix.match(/[^ \/\\]*/)) {
                    throw new Error(path + "suffix dont match [^ \/\\]*");
                }
            }
            if (target["template"] != null && target["template"] != undefined) {
                let _template = target["template"];
                if (!_.isString(_template)) {
                    throw new Error(path + "template is not a string");
                }
            }
            if (isCompleteObj && (target["applications"] == null || target["applications"] == undefined)) {
                throw new Error(path + "applications is required");
            }
            if (target["applications"] != null && target["applications"] != undefined) {
                target["applications"].forEach((_applications, index) => {
                    if (!_.isString(_applications)) {
                        throw new Error(path + "applications is not a string");
                    }
                });
            }
            if (isCompleteObj && (target["clients"] == null || target["clients"] == undefined)) {
                throw new Error(path + "clients is required");
            }
            if (target["clients"] != null && target["clients"] != undefined) {
                target["clients"].forEach((_clients, index) => {
                    if (!_.isString(_clients)) {
                        throw new Error(path + "clients is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_nginxConfigurationFileApp.check(target, true, path).then(() => {
            return new Model_nginxConfigurationFileApp(target);
        });
    }
}
exports.Model_nginxConfigurationFileApp = Model_nginxConfigurationFileApp;
//# sourceMappingURL=Model_nginxConfigurationFileApp.js.map