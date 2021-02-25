"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_periodicalDistrution = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  période de distribution
*/
class Entity_periodicalDistrution extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'periodicalDistrution' && ['periodicalDistrution_month', 'periodicalDistrution_day', 'periodicalDistrution_periode',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["nbMax"] != undefined) {
            obj["nbMax"] = new Number(obj["nbMax"]).valueOf();
        }
        if (obj["currentNb"] != undefined) {
            obj["currentNb"] = new Number(obj["currentNb"]).valueOf();
        }
    }
    static checknbMax(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
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
    static checkcurrentNb(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
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
        if (target.nbMax != null && target.nbMax != undefined) {
            res = Entity_periodicalDistrution.checknbMax(target.nbMax, `${path}.nbMax`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.currentNb != null && target.currentNb != undefined) {
            res = Entity_periodicalDistrution.checkcurrentNb(target.currentNb, `${path}.currentNb`);
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
            case 'nbMax':
                //number
                return new Number(value).valueOf();
                break;
            case 'currentNb':
                //number
                return new Number(value).valueOf();
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
            case 'nbMax':
                return null;
            case 'currentNb':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_periodicalDistrution = Entity_periodicalDistrution;
