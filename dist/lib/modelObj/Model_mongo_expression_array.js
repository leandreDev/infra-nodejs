"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_mongo_expression_1 = require("./Model_mongo_expression");
/**
  mongo_expression_array
*/
class Model_mongo_expression_array extends Model_mongo_expression_1.Model_mongo_expression {
    /**
      mongo_expression_array
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_array";
        /**
  isArray
  */
        this["isArray"] = false;
        if (obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])) {
            this["value"] = obj["value"].map((value) => {
                return value.toString();
            });
        }
        if (obj["valueType"] != undefined) {
            this["valueType"] = obj["valueType"].toString();
        }
        if (obj["isArray"] != undefined) {
            this["isArray"] = new Boolean(obj["isArray"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["value"] != null && target["value"] != undefined) {
                target["value"].forEach((_value, index) => {
                    if (!_.isString(_value)) {
                        throw new Error(path + "value index: " + index + "is not a string");
                    }
                });
            }
            if (target["valueType"] != null && target["valueType"] != undefined) {
                let _valueType = target["valueType"];
                if (!_.isString(_valueType)) {
                    throw new Error(path + "valueType is not a string");
                }
                let _enum_valueType = ["string", "number", "boolean", "date"];
                if (_enum_valueType.indexOf(_valueType) == -1) {
                    throw new Error(path + "valueType dont match one of string , number , boolean , date");
                }
            }
            if (target["isArray"] != null && target["isArray"] != undefined) {
                let _isArray = target["isArray"];
                if (!_.isBoolean(_isArray)) {
                    throw new Error(path + "isArray is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_mongo_expression_array.check(target, true, path).then(() => {
            return new Model_mongo_expression_array(target);
        });
    }
}
exports.Model_mongo_expression_array = Model_mongo_expression_array;
//# sourceMappingURL=Model_mongo_expression_array.js.map