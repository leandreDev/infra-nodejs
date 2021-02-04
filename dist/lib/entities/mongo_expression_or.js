"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_mongo_expression_or = void 0;
const _ = require("lodash");
const Index = require("./Index");
const mongo_expression_logical_1 = require("./mongo_expression_logical");
/**
  https://docs.mongodb.com/manual/reference/operator/query/or/
*/
class Entity_mongo_expression_or extends mongo_expression_logical_1.Entity_mongo_expression_logical {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'mongo_expression_or' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        mongo_expression_logical_1.Entity_mongo_expression_logical.cast(obj, true);
        if (obj["expression"] != undefined && obj["expression"] != null && _.isArray(obj["expression"])) {
            obj["expression"].forEach((value) => {
                Index.Entity_mongo_expression.cast(value);
            });
        }
    }
    static checkexpression(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_mongo_expression.check(val, false, path);
            //5a05b82108393ebf14437139
        }
        res = [...res, ...result];
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
        err = mongo_expression_logical_1.Entity_mongo_expression_logical.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.expression == null || target.expression == undefined)) {
            err.push(path + ".expression is required");
        }
        if (target.expression != null && target.expression != undefined) {
            target.expression.forEach((data, index) => {
                res = Entity_mongo_expression_or.checkexpression(target.expression[index], `${path}.expression.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
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
            case 'expression':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_mongo_expression.castQueryParam(subPath, value);
                }
                break;
            default:
                return mongo_expression_logical_1.Entity_mongo_expression_logical.castQueryParam(key, value);
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
            case 'expression':
                return Index.Entity_mongo_expression.getClassNameOfProp(subPath);
            default:
                return mongo_expression_logical_1.Entity_mongo_expression_logical.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_mongo_expression_or = Entity_mongo_expression_or;
//# sourceMappingURL=mongo_expression_or.js.map