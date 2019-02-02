"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  paramètre d'une route
*/
class Model_routeParam extends utils_1.Base {
    /**
      paramètre d'une route
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "routeParam";
        if (obj["paramName"] != undefined) {
            this["paramName"] = obj["paramName"].toString();
        }
        if (obj["type"] != undefined) {
            this["type"] = obj["type"].toString();
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
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_routeParam.check(target, true, path).then(() => {
            return new Model_routeParam(target);
        });
    }
}
exports.Model_routeParam = Model_routeParam;
//# sourceMappingURL=Model_routeParam.js.map