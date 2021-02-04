"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_init_js = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  service qui retourne un init.js
*/
class Entity_service_init_js extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_init_js' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])) {
            obj["templates"].forEach((value) => {
                Index.Entity_TemplateLodash.cast(value);
            });
        }
    }
    static checktemplates(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_TemplateLodash.check(val, false, path);
            //5b261c2afcd72f6642874b21
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.templates == null || target.templates == undefined)) {
            err.push(path + ".templates is required");
        }
        if (target.templates != null && target.templates != undefined) {
            target.templates.forEach((data, index) => {
                res = Entity_service_init_js.checktemplates(target.templates[index], `${path}.templates.${index}`);
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
            case 'templates':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_TemplateLodash.castQueryParam(subPath, value);
                }
                break;
            default:
                return service_1.Entity_service.castQueryParam(key, value);
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
            case 'templates':
                return Index.Entity_TemplateLodash.getClassNameOfProp(subPath);
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_init_js = Entity_service_init_js;
//# sourceMappingURL=service_init_js.js.map