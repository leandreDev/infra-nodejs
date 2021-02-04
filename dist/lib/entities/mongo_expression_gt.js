"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_mongo_expression_gt = void 0;
const Index = require("./Index");
const mongo_expression_comp_1 = require("./mongo_expression_comp");
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gt
*/
class Entity_mongo_expression_gt extends mongo_expression_comp_1.Entity_mongo_expression_comp {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'mongo_expression_gt' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        mongo_expression_comp_1.Entity_mongo_expression_comp.cast(obj, true);
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = mongo_expression_comp_1.Entity_mongo_expression_comp.check(target, isCompleteObj, path);
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
                return mongo_expression_comp_1.Entity_mongo_expression_comp.castQueryParam(key, value);
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
                return mongo_expression_comp_1.Entity_mongo_expression_comp.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_mongo_expression_gt = Entity_mongo_expression_gt;
//# sourceMappingURL=mongo_expression_gt.js.map