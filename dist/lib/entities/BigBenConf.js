"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_BigBenConf = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  Configuration de connexion BigBen
*/
class Entity_BigBenConf extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'BigBenConf' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["u"] != undefined) {
            obj["u"] = obj["u"].toString();
        }
        if (obj["p"] != undefined) {
            obj["p"] = obj["p"].toString();
        }
        if (obj["k"] != undefined) {
            obj["k"] = obj["k"].toString();
        }
        if (obj["apiUrl"] != undefined) {
            obj["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["marcoApiKey"] != undefined) {
            obj["marcoApiKey"] = obj["marcoApiKey"].toString();
        }
        if (obj["marcoApiUrl"] != undefined) {
            obj["marcoApiUrl"] = obj["marcoApiUrl"].toString();
        }
        if (obj["isMarcoApiActive"] != undefined) {
            obj["isMarcoApiActive"] = new Boolean(obj["isMarcoApiActive"]).valueOf();
        }
    }
    static checku(val, path = null) {
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
    static checkp(val, path = null) {
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
    static checkk(val, path = null) {
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
    static checkapiUrl(val, path = null) {
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
    static checkmarcoApiKey(val, path = null) {
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
    static checkmarcoApiUrl(val, path = null) {
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
    static checkisMarcoApiActive(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        if (isCompleteObj && (target.u == null || target.u == undefined)) {
            err.push(path + ".u is required");
        }
        if (target.u != null && target.u != undefined) {
            res = Entity_BigBenConf.checku(target.u, `${path}.u`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.p == null || target.p == undefined)) {
            err.push(path + ".p is required");
        }
        if (target.p != null && target.p != undefined) {
            res = Entity_BigBenConf.checkp(target.p, `${path}.p`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.k == null || target.k == undefined)) {
            err.push(path + ".k is required");
        }
        if (target.k != null && target.k != undefined) {
            res = Entity_BigBenConf.checkk(target.k, `${path}.k`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.apiUrl == null || target.apiUrl == undefined)) {
            err.push(path + ".apiUrl is required");
        }
        if (target.apiUrl != null && target.apiUrl != undefined) {
            res = Entity_BigBenConf.checkapiUrl(target.apiUrl, `${path}.apiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.marcoApiKey != null && target.marcoApiKey != undefined) {
            res = Entity_BigBenConf.checkmarcoApiKey(target.marcoApiKey, `${path}.marcoApiKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.marcoApiUrl != null && target.marcoApiUrl != undefined) {
            res = Entity_BigBenConf.checkmarcoApiUrl(target.marcoApiUrl, `${path}.marcoApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.isMarcoApiActive != null && target.isMarcoApiActive != undefined) {
            res = Entity_BigBenConf.checkisMarcoApiActive(target.isMarcoApiActive, `${path}.isMarcoApiActive`);
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
            case 'u':
                //string
                return new String(value).valueOf();
                break;
            case 'p':
                //string
                return new String(value).valueOf();
                break;
            case 'k':
                //string
                return new String(value).valueOf();
                break;
            case 'apiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'marcoApiKey':
                //string
                return new String(value).valueOf();
                break;
            case 'marcoApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'isMarcoApiActive':
                //boolean
                return new Boolean(value).valueOf();
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
            case 'u':
                return null;
            case 'p':
                return null;
            case 'k':
                return null;
            case 'apiUrl':
                return null;
            case 'marcoApiKey':
                return null;
            case 'marcoApiUrl':
                return null;
            case 'isMarcoApiActive':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_BigBenConf = Entity_BigBenConf;
