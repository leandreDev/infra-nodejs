"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  description d'un fichier de configuration nginx
*/
class Model_nginxConfigurationFile extends utils_1.Base {
    /**
      description d'un fichier de configuration nginx
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "nginxConfigurationFile";
        if (obj["suffix"] != undefined) {
            this["suffix"] = obj["suffix"].toString();
        }
        if (obj["template"] != undefined) {
            this["template"] = obj["template"].toString();
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
            if (target["services"] != null && target["services"] != undefined) {
                target["services"].forEach((_services, index) => {
                    if (!_.isString(_services)) {
                        throw new Error(path + "services is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_nginxConfigurationFile.check(target, true, path).then(() => {
            return new Model_nginxConfigurationFile(target);
        });
    }
}
exports.Model_nginxConfigurationFile = Model_nginxConfigurationFile;
//# sourceMappingURL=Model_nginxConfigurationFile.js.map