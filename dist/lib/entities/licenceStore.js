"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_licenceStore = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  stock de licence distribuable
*/
class Entity_licenceStore extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'licenceStore' && ['licenceStore_global',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["nbLicence"] != undefined) {
            obj["nbLicence"] = new Number(obj["nbLicence"]).valueOf();
        }
        if (obj["licenceTemplate"] != undefined && obj["licenceTemplate"] != null && _.isArray(obj["licenceTemplate"])) {
            obj["licenceTemplate"].forEach((value) => {
                Index.Entity_licence.cast(value);
            });
        }
        if (obj["autoAssign"] != undefined) {
            obj["autoAssign"] = new Boolean(obj["autoAssign"]).valueOf();
        }
        if (obj["validytyStartDate"] != undefined) {
            obj["validytyStartDate"] = new Date(obj["validytyStartDate"]);
        }
        if (obj["validityEndDate"] != undefined) {
            obj["validityEndDate"] = new Date(obj["validityEndDate"]);
        }
        if (obj["distributionPeriode"] != undefined && obj["distributionPeriode"] != null && _.isArray(obj["distributionPeriode"])) {
            obj["distributionPeriode"].forEach((value) => {
                Index.Entity_periodicalDistrution.cast(value);
            });
        }
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["nbLicenceOriginal"] != undefined) {
            obj["nbLicenceOriginal"] = new Number(obj["nbLicenceOriginal"]).valueOf();
        }
        if (obj["ref"] != undefined) {
            obj["ref"] = obj["ref"].toString();
        }
    }
    static checknbLicence(val, path = null) {
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
    static checklicenceTemplate(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_licence.check(val, false, path);
            //592154f9c19dbc917fab452d
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkautoAssign(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isBoolean(val)) {
            res.push(`${path}  is not a boolean`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkvalidytyStartDate(val, path = null) {
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
    static checkdistributionPeriode(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_periodicalDistrution.check(val, false, path);
            //59d8d731db2cee26f47a8dac
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkname(val, path = null) {
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
    static checknbLicenceOriginal(val, path = null) {
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
    static checkref(val, path = null) {
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
        if (target.nbLicence != null && target.nbLicence != undefined) {
            res = Entity_licenceStore.checknbLicence(target.nbLicence, `${path}.nbLicence`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.licenceTemplate != null && target.licenceTemplate != undefined) {
            target.licenceTemplate.forEach((data, index) => {
                res = Entity_licenceStore.checklicenceTemplate(target.licenceTemplate[index], `${path}.licenceTemplate.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.autoAssign != null && target.autoAssign != undefined) {
            res = Entity_licenceStore.checkautoAssign(target.autoAssign, `${path}.autoAssign`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.validytyStartDate != null && target.validytyStartDate != undefined) {
            res = Entity_licenceStore.checkvalidytyStartDate(target.validytyStartDate, `${path}.validytyStartDate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.validityEndDate != null && target.validityEndDate != undefined) {
            res = Entity_licenceStore.checkvalidityEndDate(target.validityEndDate, `${path}.validityEndDate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.distributionPeriode != null && target.distributionPeriode != undefined) {
            target.distributionPeriode.forEach((data, index) => {
                res = Entity_licenceStore.checkdistributionPeriode(target.distributionPeriode[index], `${path}.distributionPeriode.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (isCompleteObj && (target.name == null || target.name == undefined)) {
            err.push(path + ".name is required");
        }
        if (target.name != null && target.name != undefined) {
            res = Entity_licenceStore.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.nbLicenceOriginal == null || target.nbLicenceOriginal == undefined)) {
            err.push(path + ".nbLicenceOriginal is required");
        }
        if (target.nbLicenceOriginal != null && target.nbLicenceOriginal != undefined) {
            res = Entity_licenceStore.checknbLicenceOriginal(target.nbLicenceOriginal, `${path}.nbLicenceOriginal`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.ref != null && target.ref != undefined) {
            res = Entity_licenceStore.checkref(target.ref, `${path}.ref`);
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
            case 'nbLicence':
                //number
                return new Number(value).valueOf();
                break;
            case 'licenceTemplate':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_licence.castQueryParam(subPath, value);
                }
                break;
            case 'autoAssign':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'validytyStartDate':
                //date
                return new Date(value);
                break;
            case 'validityEndDate':
                //date
                return new Date(value);
                break;
            case 'distributionPeriode':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_periodicalDistrution.castQueryParam(subPath, value);
                }
                break;
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'nbLicenceOriginal':
                //number
                return new Number(value).valueOf();
                break;
            case 'ref':
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
            case 'nbLicence':
                return null;
            case 'licenceTemplate':
                return Index.Entity_licence.getClassNameOfProp(subPath);
            case 'autoAssign':
                return null;
            case 'validytyStartDate':
                return null;
            case 'validityEndDate':
                return null;
            case 'distributionPeriode':
                return Index.Entity_periodicalDistrution.getClassNameOfProp(subPath);
            case 'name':
                return null;
            case 'nbLicenceOriginal':
                return null;
            case 'ref':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_licenceStore = Entity_licenceStore;
