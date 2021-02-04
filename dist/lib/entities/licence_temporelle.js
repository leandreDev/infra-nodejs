"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_licence_temporelle = void 0;
const _ = require("lodash");
const Index = require("./Index");
const licence_1 = require("./licence");
/**
  c'est une licence qui dure un certain temps
*/
class Entity_licence_temporelle extends licence_1.Entity_licence {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'licence_temporelle' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        licence_1.Entity_licence.cast(obj, true);
        if (obj["validityStartDate"] != undefined) {
            obj["validityStartDate"] = new Date(obj["validityStartDate"]);
        }
        if (obj["validityEndDate"] != undefined) {
            obj["validityEndDate"] = new Date(obj["validityEndDate"]);
        }
        if (obj["licenceDuration"] != undefined) {
            obj["licenceDuration"] = new Number(obj["licenceDuration"]).valueOf();
        }
        if (obj["licenceEndDate"] != undefined) {
            obj["licenceEndDate"] = new Date(obj["licenceEndDate"]);
        }
    }
    static checkvalidityStartDate(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isDate(val)) {
            res.push(`${path}  is not a Date`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkvalidityEndDate(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isDate(val)) {
            res.push(`${path}  is not a Date`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checklicenceDuration(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checklicenceEndDate(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isDate(val)) {
            res.push(`${path}  is not a Date`);
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
        err = licence_1.Entity_licence.check(target, isCompleteObj, path);
        if (target.validityStartDate != null && target.validityStartDate != undefined) {
            res = Entity_licence_temporelle.checkvalidityStartDate(target.validityStartDate, `${path}.validityStartDate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.validityEndDate != null && target.validityEndDate != undefined) {
            res = Entity_licence_temporelle.checkvalidityEndDate(target.validityEndDate, `${path}.validityEndDate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.licenceDuration != null && target.licenceDuration != undefined) {
            res = Entity_licence_temporelle.checklicenceDuration(target.licenceDuration, `${path}.licenceDuration`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.licenceEndDate != null && target.licenceEndDate != undefined) {
            res = Entity_licence_temporelle.checklicenceEndDate(target.licenceEndDate, `${path}.licenceEndDate`);
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
            case 'validityStartDate':
                //date
                return new Date(value);
                break;
            case 'validityEndDate':
                //date
                return new Date(value);
                break;
            case 'licenceDuration':
                //number
                return new Number(value).valueOf();
                break;
            case 'licenceEndDate':
                //date
                return new Date(value);
                break;
            default:
                return licence_1.Entity_licence.castQueryParam(key, value);
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
            case 'validityStartDate':
                return null;
            case 'validityEndDate':
                return null;
            case 'licenceDuration':
                return null;
            case 'licenceEndDate':
                return null;
            default:
                return licence_1.Entity_licence.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_licence_temporelle = Entity_licence_temporelle;
//# sourceMappingURL=licence_temporelle.js.map