"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_routeParam = void 0;
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  paramètre d'une route
*/
class Entity_routeParam extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'routeParam' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["paramName"] != undefined) {
            obj["paramName"] = obj["paramName"].toString();
        }
        if (obj["type"] != undefined) {
            obj["type"] = obj["type"].toString();
        }
    }
    static checkparamName(val, path = null) {
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
    static checktype(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["string", "boolean", "number", "date", "objectId"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of string , boolean , number , date , objectId`);
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
        if (isCompleteObj && (target.paramName == null || target.paramName == undefined)) {
            err.push(path + ".paramName is required");
        }
        if (target.paramName != null && target.paramName != undefined) {
            res = Entity_routeParam.checkparamName(target.paramName, `${path}.paramName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.type != null && target.type != undefined) {
            res = Entity_routeParam.checktype(target.type, `${path}.type`);
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
            case 'paramName':
                //string
                return new String(value).valueOf();
                break;
            case 'type':
                //string
                return new String(value).valueOf();
                break;
            default:
                return utils_1.Entity.castQueryParam(key, value);
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
            case 'paramName':
                return null;
            case 'type':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_routeParam = Entity_routeParam;
