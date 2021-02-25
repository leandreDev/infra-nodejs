"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_MangoConf = void 0;
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  Données de configuration
*/
class Entity_MangoConf extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'MangoConf' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["clientId"] != undefined) {
            obj["clientId"] = obj["clientId"].toString();
        }
        if (obj["version"] != undefined) {
            obj["version"] = obj["version"].toString();
        }
        if (obj["apiKey"] != undefined) {
            obj["apiKey"] = obj["apiKey"].toString();
        }
        if (obj["serverUrl"] != undefined) {
            obj["serverUrl"] = obj["serverUrl"].toString();
        }
        if (obj["paymentRedirectUrl"] != undefined) {
            obj["paymentRedirectUrl"] = obj["paymentRedirectUrl"].toString();
        }
        if (obj["clientUserId"] != undefined) {
            obj["clientUserId"] = obj["clientUserId"].toString();
        }
    }
    static checkclientId(val, path = null) {
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
    static checkversion(val, path = null) {
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
    static checkapiKey(val, path = null) {
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
    static checkserverUrl(val, path = null) {
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
    static checkpaymentRedirectUrl(val, path = null) {
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
    static checkclientUserId(val, path = null) {
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
        if (isCompleteObj && (target.clientId == null || target.clientId == undefined)) {
            err.push(path + ".clientId is required");
        }
        if (target.clientId != null && target.clientId != undefined) {
            res = Entity_MangoConf.checkclientId(target.clientId, `${path}.clientId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.version == null || target.version == undefined)) {
            err.push(path + ".version is required");
        }
        if (target.version != null && target.version != undefined) {
            res = Entity_MangoConf.checkversion(target.version, `${path}.version`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.apiKey == null || target.apiKey == undefined)) {
            err.push(path + ".apiKey is required");
        }
        if (target.apiKey != null && target.apiKey != undefined) {
            res = Entity_MangoConf.checkapiKey(target.apiKey, `${path}.apiKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.serverUrl == null || target.serverUrl == undefined)) {
            err.push(path + ".serverUrl is required");
        }
        if (target.serverUrl != null && target.serverUrl != undefined) {
            res = Entity_MangoConf.checkserverUrl(target.serverUrl, `${path}.serverUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.paymentRedirectUrl != null && target.paymentRedirectUrl != undefined) {
            res = Entity_MangoConf.checkpaymentRedirectUrl(target.paymentRedirectUrl, `${path}.paymentRedirectUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.clientUserId != null && target.clientUserId != undefined) {
            res = Entity_MangoConf.checkclientUserId(target.clientUserId, `${path}.clientUserId`);
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
            case 'clientId':
                //string
                return new String(value).valueOf();
                break;
            case 'version':
                //string
                return new String(value).valueOf();
                break;
            case 'apiKey':
                //string
                return new String(value).valueOf();
                break;
            case 'serverUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'paymentRedirectUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'clientUserId':
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
            case 'clientId':
                return null;
            case 'version':
                return null;
            case 'apiKey':
                return null;
            case 'serverUrl':
                return null;
            case 'paymentRedirectUrl':
                return null;
            case 'clientUserId':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_MangoConf = Entity_MangoConf;
