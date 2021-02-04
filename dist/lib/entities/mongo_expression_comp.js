"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_mongo_expression_comp = void 0;
const _ = require("lodash");
const Index = require("./Index");
const mongo_expression_1 = require("./mongo_expression");
/**
  mongo_expression_comp
*/
class Entity_mongo_expression_comp extends mongo_expression_1.Entity_mongo_expression {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'mongo_expression_comp' && ['mongo_expression_eq', 'mongo_expression_gt', 'mongo_expression_gte', 'mongo_expression_in', 'mongo_expression_lt', 'mongo_expression_lte', 'mongo_expression_ne',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        mongo_expression_1.Entity_mongo_expression.cast(obj, true);
        if (obj["field"] != undefined) {
            obj["field"] = obj["field"].toString();
        }
        if (obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])) {
            obj["value"] = obj["value"].map((value) => {
                return value.toString();
            });
        }
        if (obj["dataType"] != undefined) {
            obj["dataType"] = obj["dataType"].toString();
        }
        if (obj["isArray"] != undefined) {
            obj["isArray"] = new Boolean(obj["isArray"]).valueOf();
        }
    }
    static checkfield(val, path = null) {
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
    static checkdataType(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["string", "number", "date", "boolean"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of string , number , date , boolean`);
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
        if (target.field != null && target.field != undefined) {
            res = Entity_mongo_expression_comp.checkfield(target.field, `${path}.field`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.value == null || target.value == undefined)) {
            err.push(path + ".value is required");
        }
        if (target.value != null && target.value != undefined) {
            target.value.forEach((data, index) => {
                res = Entity_mongo_expression_comp.checkvalue(target.value[index], `${path}.value.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (isCompleteObj && (target.dataType == null || target.dataType == undefined)) {
            err.push(path + ".dataType is required");
        }
        if (target.dataType != null && target.dataType != undefined) {
            res = Entity_mongo_expression_comp.checkdataType(target.dataType, `${path}.dataType`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.isArray != null && target.isArray != undefined) {
            res = Entity_mongo_expression_comp.checkisArray(target.isArray, `${path}.isArray`);
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
            case 'field':
                //string
                return new String(value).valueOf();
                break;
            case 'value':
                //string
                return new String(value).valueOf();
                break;
            case 'dataType':
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
            case 'field':
                return null;
            case 'value':
                return null;
            case 'dataType':
                return null;
            case 'isArray':
                return null;
            default:
                return mongo_expression_1.Entity_mongo_expression.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_mongo_expression_comp = Entity_mongo_expression_comp;
//# sourceMappingURL=mongo_expression_comp.js.map