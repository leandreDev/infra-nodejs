"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_periodicalDistrution_periode = void 0;
const _ = require("lodash");
const Index = require("./Index");
const periodicalDistrution_1 = require("./periodicalDistrution");
/**
  permet de créer une plage de date de distribution
*/
class Entity_periodicalDistrution_periode extends periodicalDistrution_1.Entity_periodicalDistrution {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'periodicalDistrution_periode' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        periodicalDistrution_1.Entity_periodicalDistrution.cast(obj, true);
        if (obj["startDate"] != undefined) {
            obj["startDate"] = new Date(obj["startDate"]);
        }
        if (obj["endDate"] != undefined) {
            obj["endDate"] = new Date(obj["endDate"]);
        }
    }
    static checkstartDate(val, path = null) {
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
    static checkendDate(val, path = null) {
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
        err = periodicalDistrution_1.Entity_periodicalDistrution.check(target, isCompleteObj, path);
        if (target.startDate != null && target.startDate != undefined) {
            res = Entity_periodicalDistrution_periode.checkstartDate(target.startDate, `${path}.startDate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.endDate != null && target.endDate != undefined) {
            res = Entity_periodicalDistrution_periode.checkendDate(target.endDate, `${path}.endDate`);
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
            case 'startDate':
                //date
                return new Date(value);
                break;
            case 'endDate':
                //date
                return new Date(value);
                break;
            default:
                return periodicalDistrution_1.Entity_periodicalDistrution.castQueryParam(key, value);
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
            case 'startDate':
                return null;
            case 'endDate':
                return null;
            default:
                return periodicalDistrution_1.Entity_periodicalDistrution.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_periodicalDistrution_periode = Entity_periodicalDistrution_periode;
//# sourceMappingURL=periodicalDistrution_periode.js.map