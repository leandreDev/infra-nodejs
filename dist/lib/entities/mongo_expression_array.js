"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_mongo_expression_array = void 0;
const _ = require("lodash");
const Index = require("./Index");
const mongo_expression_1 = require("./mongo_expression");
/**
  mongo_expression_array
*/
class Entity_mongo_expression_array extends mongo_expression_1.Entity_mongo_expression {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'mongo_expression_array' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        mongo_expression_1.Entity_mongo_expression.cast(obj, true);
        if (obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])) {
            obj["value"] = obj["value"].map((value) => {
                return value.toString();
            });
        }
        if (obj["valueType"] != undefined) {
            obj["valueType"] = obj["valueType"].toString();
        }
        if (obj["isArray"] != undefined) {
            obj["isArray"] = new Boolean(obj["isArray"]).valueOf();
        }
    }
    static checkvalue(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkvalueType(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["string", "number", "boolean", "date"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of string , number , boolean , date`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkisArray(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isBoolean(val)) {
            res.push(`${path}  is not a boolean`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = mongo_expression_1.Entity_mongo_expression.check(target, isCompleteObj, path);
        if (target.value != null && target.value != undefined) {
            target.value.forEach((data, index) => {
                res = Entity_mongo_expression_array.checkvalue(target.value[index], `${path}.value.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.valueType != null && target.valueType != undefined) {
            res = Entity_mongo_expression_array.checkvalueType(target.valueType, `${path}.valueType`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.isArray != null && target.isArray != undefined) {
            res = Entity_mongo_expression_array.checkisArray(target.isArray, `${path}.isArray`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        return err;
    }
    static castQueryParam(path, value) {
        let key = '';
        let subPath = '';
        if (value === null) {
            return null;
        }
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} ${value}`);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path} ${value}`);
        }
        switch (key) {
            case 'value':
                //string
                return new String(value).valueOf();
                break;
            case 'valueType':
                //string
                return new String(value).valueOf();
                break;
            case 'isArray':
                //boolean
                return new Boolean(value).valueOf();
                break;
            default:
                return mongo_expression_1.Entity_mongo_expression.castQueryParam(key, value);
                break;
        }
    }
    static getClassNameOfProp(path) {
        let key = '';
        let subPath = '';
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} `);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path}`);
        }
        switch (key) {
            case 'value':
                return null;
            case 'valueType':
                return null;
            case 'isArray':
                return null;
            default:
                return mongo_expression_1.Entity_mongo_expression.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_mongo_expression_array = Entity_mongo_expression_array;
//# sourceMappingURL=mongo_expression_array.js.map