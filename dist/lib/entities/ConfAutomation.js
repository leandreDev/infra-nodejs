"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_ConfAutomation = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  Configuration pour les automation des services qbp
*/
class Entity_ConfAutomation extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'ConfAutomation' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["datesForGeneratePayout"] != undefined && obj["datesForGeneratePayout"] != null && _.isArray(obj["datesForGeneratePayout"])) {
            obj["datesForGeneratePayout"] = obj["datesForGeneratePayout"].map((value) => {
                return new Number(value).valueOf();
            });
        }
        if (obj["datesForGenerateInvoice"] != undefined && obj["datesForGenerateInvoice"] != null && _.isArray(obj["datesForGenerateInvoice"])) {
            obj["datesForGenerateInvoice"] = obj["datesForGenerateInvoice"].map((value) => {
                return new Number(value).valueOf();
            });
        }
    }
    static checkdatesForGeneratePayout(val, path = null) {
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
    static checkdatesForGenerateInvoice(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        if (target.datesForGeneratePayout != null && target.datesForGeneratePayout != undefined) {
            target.datesForGeneratePayout.forEach((data, index) => {
                res = Entity_ConfAutomation.checkdatesForGeneratePayout(target.datesForGeneratePayout[index], `${path}.datesForGeneratePayout.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.datesForGenerateInvoice != null && target.datesForGenerateInvoice != undefined) {
            target.datesForGenerateInvoice.forEach((data, index) => {
                res = Entity_ConfAutomation.checkdatesForGenerateInvoice(target.datesForGenerateInvoice[index], `${path}.datesForGenerateInvoice.${index}`);
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
            case 'datesForGeneratePayout':
                //number
                return new Number(value).valueOf();
                break;
            case 'datesForGenerateInvoice':
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
            case 'datesForGeneratePayout':
                return null;
            case 'datesForGenerateInvoice':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_ConfAutomation = Entity_ConfAutomation;
