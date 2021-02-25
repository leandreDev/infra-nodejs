"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_MarketingCloudApisConf = void 0;
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  config pour MarketingCloudApis
*/
class Entity_MarketingCloudApisConf extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'MarketingCloudApisConf' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["accessTokenUrl"] != undefined) {
            obj["accessTokenUrl"] = obj["accessTokenUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            obj["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            obj["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["account_id"] != undefined) {
            obj["account_id"] = obj["account_id"].toString();
        }
        if (obj["subDomain"] != undefined) {
            obj["subDomain"] = obj["subDomain"].toString();
        }
    }
    static checkaccessTokenUrl(val, path = null) {
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
    static checkclient_id(val, path = null) {
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
    static checkclient_secret(val, path = null) {
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
    static checkaccount_id(val, path = null) {
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
    static checksubDomain(val, path = null) {
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
        if (target.accessTokenUrl != null && target.accessTokenUrl != undefined) {
            res = Entity_MarketingCloudApisConf.checkaccessTokenUrl(target.accessTokenUrl, `${path}.accessTokenUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.client_id != null && target.client_id != undefined) {
            res = Entity_MarketingCloudApisConf.checkclient_id(target.client_id, `${path}.client_id`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.client_secret != null && target.client_secret != undefined) {
            res = Entity_MarketingCloudApisConf.checkclient_secret(target.client_secret, `${path}.client_secret`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.account_id != null && target.account_id != undefined) {
            res = Entity_MarketingCloudApisConf.checkaccount_id(target.account_id, `${path}.account_id`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.subDomain != null && target.subDomain != undefined) {
            res = Entity_MarketingCloudApisConf.checksubDomain(target.subDomain, `${path}.subDomain`);
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
            case 'accessTokenUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'client_id':
                //string
                return new String(value).valueOf();
                break;
            case 'client_secret':
                //string
                return new String(value).valueOf();
                break;
            case 'account_id':
                //string
                return new String(value).valueOf();
                break;
            case 'subDomain':
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
            case 'accessTokenUrl':
                return null;
            case 'client_id':
                return null;
            case 'client_secret':
                return null;
            case 'account_id':
                return null;
            case 'subDomain':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_MarketingCloudApisConf = Entity_MarketingCloudApisConf;
