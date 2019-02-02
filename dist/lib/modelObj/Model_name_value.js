"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  paire clef valeur
*/
class Model_name_value extends utils_1.Base {
    /**
      paire clef valeur
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "name_value";
        if (obj["key"] != undefined) {
            this["key"] = obj["key"].toString();
        }
        if (obj["value"] != undefined) {
            this["value"] = obj["value"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["key"] == null || target["key"] == undefined)) {
                throw new Error(path + "key is required");
            }
            if (target["key"] != null && target["key"] != undefined) {
                let _key = target["key"];
                if (!_.isString(_key)) {
                    throw new Error(path + "key is not a string");
                }
            }
            if (target["value"] != null && target["value"] != undefined) {
                let _value = target["value"];
                if (!_.isString(_value)) {
                    throw new Error(path + "value is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_name_value.check(target, true, path).then(() => {
            return new Model_name_value(target);
        });
    }
}
exports.Model_name_value = Model_name_value;
//# sourceMappingURL=Model_name_value.js.map