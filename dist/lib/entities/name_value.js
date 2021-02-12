"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_name_value = void 0;
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  paire clef valeur
*/
class Entity_name_value extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'name_value' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["key"] != undefined) {
            obj["key"] = obj["key"].toString();
        }
        if (obj["value"] != undefined) {
            obj["value"] = obj["value"].toString();
        }
    }
    static checkkey(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        if (isCompleteObj && (target.key == null || target.key == undefined)) {
            err.push(path + ".key is required");
        }
        if (target.key != null && target.key != undefined) {
            res = Entity_name_value.checkkey(target.key, `${path}.key`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.value != null && target.value != undefined) {
            res = Entity_name_value.checkvalue(target.value, `${path}.value`);
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
            case 'key':
                //string
                return new String(value).valueOf();
                break;
            case 'value':
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
            case 'key':
                return null;
            case 'value':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_name_value = Entity_name_value;
