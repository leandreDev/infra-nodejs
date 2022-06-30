"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_ParnerDeployConf = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  configuration du déploiement de partenaire
*/
class Entity_ParnerDeployConf extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'ParnerDeployConf' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["adminUrl"] != undefined) {
            obj["adminUrl"] = obj["adminUrl"].toString();
        }
        if (obj["landingPageUrl"] != undefined) {
            obj["landingPageUrl"] = obj["landingPageUrl"].toString();
        }
        if (obj["appClientTemplateId"] != undefined) {
            if (_.isString(obj["appClientTemplateId"])) {
                obj["appClientTemplateId"] = new utils_1.mongo.ObjectId(obj["appClientTemplateId"]);
            }
            else if (obj["appClientTemplateId"]._id) {
                obj["appClientTemplateId"] = new utils_1.mongo.ObjectId(obj["appClientTemplateId"]._id);
            }
        }
        if (obj["appAdminTemplateId"] != undefined) {
            if (_.isString(obj["appAdminTemplateId"])) {
                obj["appAdminTemplateId"] = new utils_1.mongo.ObjectId(obj["appAdminTemplateId"]);
            }
            else if (obj["appAdminTemplateId"]._id) {
                obj["appAdminTemplateId"] = new utils_1.mongo.ObjectId(obj["appAdminTemplateId"]._id);
            }
        }
        if (obj["endClientTemplateId"] != undefined) {
            if (_.isString(obj["endClientTemplateId"])) {
                obj["endClientTemplateId"] = new utils_1.mongo.ObjectId(obj["endClientTemplateId"]);
            }
            else if (obj["endClientTemplateId"]._id) {
                obj["endClientTemplateId"] = new utils_1.mongo.ObjectId(obj["endClientTemplateId"]._id);
            }
        }
        if (obj["oidcTemplateId"] != undefined) {
            if (_.isString(obj["oidcTemplateId"])) {
                obj["oidcTemplateId"] = new utils_1.mongo.ObjectId(obj["oidcTemplateId"]);
            }
            else if (obj["oidcTemplateId"]._id) {
                obj["oidcTemplateId"] = new utils_1.mongo.ObjectId(obj["oidcTemplateId"]._id);
            }
        }
    }
    static checkadminUrl(val, path = null) {
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
    static checklandingPageUrl(val, path = null) {
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
    static checkappClientTemplateId(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkappAdminTemplateId(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkendClientTemplateId(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkoidcTemplateId(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
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
        if (target.adminUrl != null && target.adminUrl != undefined) {
            res = Entity_ParnerDeployConf.checkadminUrl(target.adminUrl, `${path}.adminUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.landingPageUrl != null && target.landingPageUrl != undefined) {
            res = Entity_ParnerDeployConf.checklandingPageUrl(target.landingPageUrl, `${path}.landingPageUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.appClientTemplateId != null && target.appClientTemplateId != undefined) {
            res = Entity_ParnerDeployConf.checkappClientTemplateId(target.appClientTemplateId, `${path}.appClientTemplateId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.appAdminTemplateId != null && target.appAdminTemplateId != undefined) {
            res = Entity_ParnerDeployConf.checkappAdminTemplateId(target.appAdminTemplateId, `${path}.appAdminTemplateId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.endClientTemplateId != null && target.endClientTemplateId != undefined) {
            res = Entity_ParnerDeployConf.checkendClientTemplateId(target.endClientTemplateId, `${path}.endClientTemplateId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.oidcTemplateId != null && target.oidcTemplateId != undefined) {
            res = Entity_ParnerDeployConf.checkoidcTemplateId(target.oidcTemplateId, `${path}.oidcTemplateId`);
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
            case 'adminUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'landingPageUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'appClientTemplateId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'appAdminTemplateId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'endClientTemplateId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'oidcTemplateId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
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
            case 'adminUrl':
                return null;
            case 'landingPageUrl':
                return null;
            case 'appClientTemplateId':
                return 'application_instance';
            case 'appAdminTemplateId':
                return 'application_instance';
            case 'endClientTemplateId':
                return 'end_client';
            case 'oidcTemplateId':
                return 'oidc_Client';
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_ParnerDeployConf = Entity_ParnerDeployConf;
