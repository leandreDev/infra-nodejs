"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  paramètre d'une querry qui doit être casté
*/
class Model_castParam extends utils_1.Base {
    /**
      paramètre d'une querry qui doit être casté
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "castParam";
        if (obj["paramName"] != undefined) {
            this["paramName"] = obj["paramName"].toString();
        }
        if (obj["type"] != undefined) {
            this["type"] = obj["type"].toString();
        }
        if (obj["param"] != undefined) {
            this["param"] = obj["param"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["paramName"] == null || target["paramName"] == undefined)) {
                throw new Error(path + "paramName is required");
            }
            if (target["paramName"] != null && target["paramName"] != undefined) {
                let _paramName = target["paramName"];
                if (!_.isString(_paramName)) {
                    throw new Error(path + "paramName is not a string");
                }
            }
            if (target["type"] != null && target["type"] != undefined) {
                let _type = target["type"];
                if (!_.isString(_type)) {
                    throw new Error(path + "type is not a string");
                }
                let _enum_type = ["string", "boolean", "number", "date", "objectId"];
                if (_enum_type.indexOf(_type) == -1) {
                    throw new Error(path + "type dont match one of string , boolean , number , date , objectId");
                }
            }
            if (isCompleteObj && (target["param"] == null || target["param"] == undefined)) {
                throw new Error(path + "param is required");
            }
            if (target["param"] != null && target["param"] != undefined) {
                let _param = target["param"];
                if (!_.isString(_param)) {
                    throw new Error(path + "param is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_castParam.check(target, true, path).then(() => {
            return new Model_castParam(target);
        });
    }
}
exports.Model_castParam = Model_castParam;
//# sourceMappingURL=Model_castParam.js.map