"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_dataTableInit = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  initalisation des listes
*/
class Entity_dataTableInit extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'dataTableInit' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["fieldsNames"] != undefined && obj["fieldsNames"] != null && _.isArray(obj["fieldsNames"])) {
            obj["fieldsNames"] = obj["fieldsNames"].map((value) => {
                return value.toString();
            });
        }
        if (obj["sortField"] != undefined) {
            obj["sortField"] = obj["sortField"].toString();
        }
        if (obj["direction"] != undefined) {
            obj["direction"] = obj["direction"].toString();
        }
    }
    static checkfieldsNames(val, path = null) {
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
    static checksortField(val, path = null) {
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
    static checkdirection(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["asc", "desc"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of asc , desc`);
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
        if (target.fieldsNames != null && target.fieldsNames != undefined) {
            target.fieldsNames.forEach((data, index) => {
                res = Entity_dataTableInit.checkfieldsNames(target.fieldsNames[index], `${path}.fieldsNames.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.sortField != null && target.sortField != undefined) {
            res = Entity_dataTableInit.checksortField(target.sortField, `${path}.sortField`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.direction != null && target.direction != undefined) {
            res = Entity_dataTableInit.checkdirection(target.direction, `${path}.direction`);
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
            case 'fieldsNames':
                //string
                return new String(value).valueOf();
                break;
            case 'sortField':
                //string
                return new String(value).valueOf();
                break;
            case 'direction':
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
            case 'fieldsNames':
                return null;
            case 'sortField':
                return null;
            case 'direction':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_dataTableInit = Entity_dataTableInit;
