"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  ce champ représente les dates
*/
class Model_date extends Model_field_1.Model_field {
    /**
      ce champ représente les dates
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "date";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["isArrayOf"] != undefined) {
            this["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf();
        }
        if (obj["required"] != undefined) {
            this["required"] = new Boolean(obj["required"]).valueOf();
        }
        if (obj["unique"] != undefined) {
            this["unique"] = new Boolean(obj["unique"]).valueOf();
        }
        if (obj["index"] != undefined) {
            this["index"] = new Boolean(obj["index"]).valueOf();
        }
        if (obj["default"] != undefined) {
            this["default"] = new Date(obj["default"]);
        }
        if (obj["min"] != undefined) {
            this["min"] = new Date(obj["min"]);
        }
        if (obj["max"] != undefined) {
            this["max"] = new Date(obj["max"]);
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (isCompleteObj && (target["description"] == null || target["description"] == undefined)) {
                throw new Error(path + "description is required");
            }
            if (target["description"] != null && target["description"] != undefined) {
                let _description = target["description"];
                if (!_.isString(_description)) {
                    throw new Error(path + "description is not a string");
                }
            }
            if (target["isArrayOf"] != null && target["isArrayOf"] != undefined) {
                let _isArrayOf = target["isArrayOf"];
                if (!_.isBoolean(_isArrayOf)) {
                    throw new Error(path + "isArrayOf is not a boolean");
                }
            }
            if (target["required"] != null && target["required"] != undefined) {
                let _required = target["required"];
                if (!_.isBoolean(_required)) {
                    throw new Error(path + "required is not a boolean");
                }
            }
            if (target["unique"] != null && target["unique"] != undefined) {
                let _unique = target["unique"];
                if (!_.isBoolean(_unique)) {
                    throw new Error(path + "unique is not a boolean");
                }
            }
            if (target["index"] != null && target["index"] != undefined) {
                let _index = target["index"];
                if (!_.isBoolean(_index)) {
                    throw new Error(path + "index is not a boolean");
                }
            }
            if (target["default"] != null && target["default"] != undefined) {
                let _default = target["default"];
                if (!_.isDate(_default)) {
                    throw new Error(path + "default is not a Date");
                }
            }
            if (target["min"] != null && target["min"] != undefined) {
                let _min = target["min"];
                if (!_.isDate(_min)) {
                    throw new Error(path + "min is not a Date");
                }
            }
            if (target["max"] != null && target["max"] != undefined) {
                let _max = target["max"];
                if (!_.isDate(_max)) {
                    throw new Error(path + "max is not a Date");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_date.check(target, true, path).then(() => {
            return new Model_date(target);
        });
    }
}
exports.Model_date = Model_date;
//# sourceMappingURL=Model_date.js.map