"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_periodicalDistrution_month = void 0;
const _ = require("lodash");
const Index = require("./Index");
const periodicalDistrution_1 = require("./periodicalDistrution");
/**
  permet de limiter la distribution chaque jour du mois
*/
class Entity_periodicalDistrution_month extends periodicalDistrution_1.Entity_periodicalDistrution {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'periodicalDistrution_month' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        periodicalDistrution_1.Entity_periodicalDistrution.cast(obj, true);
        if (obj["startDay"] != undefined) {
            obj["startDay"] = new Number(obj["startDay"]).valueOf();
        }
        if (obj["endDay"] != undefined) {
            obj["endDay"] = new Number(obj["endDay"]).valueOf();
        }
    }
    static checkstartDay(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (val > 1) {
            res.push(`${path} must be greater than  1`);
        }
        if (val < 31) {
            res.push(`${path} must be less than 31`);
        }
        if (val % 1 !== 0) {
            res.push(`${path} must be % 1`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkendDay(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (val > 1) {
            res.push(`${path} must be greater than  1`);
        }
        if (val < 31) {
            res.push(`${path} must be less than 31`);
        }
        if (val % 1 !== 0) {
            res.push(`${path} must be % 1`);
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
        if (target.startDay != null && target.startDay != undefined) {
            res = Entity_periodicalDistrution_month.checkstartDay(target.startDay, `${path}.startDay`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.endDay != null && target.endDay != undefined) {
            res = Entity_periodicalDistrution_month.checkendDay(target.endDay, `${path}.endDay`);
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
            case 'startDay':
                //number
                return new Number(value).valueOf();
                break;
            case 'endDay':
                //number
                return new Number(value).valueOf();
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
            case 'startDay':
                return null;
            case 'endDay':
                return null;
            default:
                return periodicalDistrution_1.Entity_periodicalDistrution.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_periodicalDistrution_month = Entity_periodicalDistrution_month;
