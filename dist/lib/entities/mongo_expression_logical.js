"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_mongo_expression_logical = void 0;
const Index = require("./Index");
const mongo_expression_1 = require("./mongo_expression");
/**
  Logical Query Operators
*/
class Entity_mongo_expression_logical extends mongo_expression_1.Entity_mongo_expression {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'mongo_expression_logical' && ['mongo_expression_and', 'mongo_expression_not', 'mongo_expression_nor', 'mongo_expression_or',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        mongo_expression_1.Entity_mongo_expression.cast(obj, true);
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = mongo_expression_1.Entity_mongo_expression.check(target, isCompleteObj, path);
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
            default:
                return mongo_expression_1.Entity_mongo_expression.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_mongo_expression_logical = Entity_mongo_expression_logical;
