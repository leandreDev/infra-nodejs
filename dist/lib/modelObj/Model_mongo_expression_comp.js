"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_mongo_expression_1 = require("./Model_mongo_expression");
/**
  mongo_expression_comp
*/
class Model_mongo_expression_comp extends Model_mongo_expression_1.Model_mongo_expression {
    /**
      mongo_expression_comp
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_comp";
        if (obj["field"] != undefined) {
            this["field"] = obj["field"].toString();
        }
        if (obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])) {
            this["value"] = obj["value"].map((value) => {
                return value.toString();
            });
        }
        if (obj["dataType"] != undefined) {
            this["dataType"] = obj["dataType"].toString();
        }
        if (obj["isArray"] != undefined) {
            this["isArray"] = new Boolean(obj["isArray"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["field"] != null && target["field"] != undefined) {
                let _field = target["field"];
                if (!_.isString(_field)) {
                    throw new Error(path + "field is not a string");
                }
            }
            if (isCompleteObj && (target["value"] == null || target["value"] == undefined)) {
                throw new Error(path + "value is required");
            }
            if (target["value"] != null && target["value"] != undefined) {
                target["value"].forEach((_value, index) => {
                    if (!_.isString(_value)) {
                        throw new Error(path + "value index: " + index + "is not a string");
                    }
                });
            }
            if (isCompleteObj && (target["dataType"] == null || target["dataType"] == undefined)) {
                throw new Error(path + "dataType is required");
            }
            if (target["dataType"] != null && target["dataType"] != undefined) {
                let _dataType = target["dataType"];
                if (!_.isString(_dataType)) {
                    throw new Error(path + "dataType is not a string");
                }
                let _enum_dataType = ["string", "number", "date", "boolean"];
                if (_enum_dataType.indexOf(_dataType) == -1) {
                    throw new Error(path + "dataType dont match one of string , number , date , boolean");
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
        return Model_mongo_expression_comp.check(target, true, path).then(() => {
            return new Model_mongo_expression_comp(target);
        });
    }
}
exports.Model_mongo_expression_comp = Model_mongo_expression_comp;
//# sourceMappingURL=Model_mongo_expression_comp.js.map