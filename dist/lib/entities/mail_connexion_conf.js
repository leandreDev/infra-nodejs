"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_mail_connexion_conf = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  associe un mail a une configuration de connexion sso+ app
*/
class Entity_mail_connexion_conf extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'mail_connexion_conf' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["mailPatern"] != undefined) {
            obj["mailPatern"] = obj["mailPatern"].toString();
        }
        if (obj["clientId"] != undefined) {
            obj["clientId"] = obj["clientId"].toString();
        }
        if (obj["redirectUri"] != undefined) {
            obj["redirectUri"] = obj["redirectUri"].toString();
        }
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                obj["end_client"] = new utils_1.mongo.ObjectId(obj["end_client"]);
            }
            else if (obj["end_client"]._id) {
                obj["end_client"] = new utils_1.mongo.ObjectId(obj["end_client"]._id);
            }
        }
        if (obj["application_instance"] != undefined) {
            if (_.isString(obj["application_instance"])) {
                obj["application_instance"] = new utils_1.mongo.ObjectId(obj["application_instance"]);
            }
            else if (obj["application_instance"]._id) {
                obj["application_instance"] = new utils_1.mongo.ObjectId(obj["application_instance"]._id);
            }
        }
        if (obj["licence_service"] != undefined) {
            obj["licence_service"] = obj["licence_service"].toString();
        }
    }
    static checkmailPatern(val, path = null) {
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
    static checkredirectUri(val, path = null) {
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
    static checkend_client(val, path = null) {
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
    static checkapplication_instance(val, path = null) {
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
    static checklicence_service(val, path = null) {
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
        if (target.mailPatern != null && target.mailPatern != undefined) {
            res = Entity_mail_connexion_conf.checkmailPatern(target.mailPatern, `${path}.mailPatern`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.clientId != null && target.clientId != undefined) {
            res = Entity_mail_connexion_conf.checkclientId(target.clientId, `${path}.clientId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.redirectUri != null && target.redirectUri != undefined) {
            res = Entity_mail_connexion_conf.checkredirectUri(target.redirectUri, `${path}.redirectUri`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.end_client != null && target.end_client != undefined) {
            res = Entity_mail_connexion_conf.checkend_client(target.end_client, `${path}.end_client`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.application_instance != null && target.application_instance != undefined) {
            res = Entity_mail_connexion_conf.checkapplication_instance(target.application_instance, `${path}.application_instance`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.licence_service != null && target.licence_service != undefined) {
            res = Entity_mail_connexion_conf.checklicence_service(target.licence_service, `${path}.licence_service`);
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
            case 'mailPatern':
                //string
                return new String(value).valueOf();
                break;
            case 'clientId':
                //string
                return new String(value).valueOf();
                break;
            case 'redirectUri':
                //string
                return new String(value).valueOf();
                break;
            case 'end_client':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'application_instance':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'licence_service':
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
            case 'mailPatern':
                return null;
            case 'clientId':
                return null;
            case 'redirectUri':
                return null;
            case 'end_client':
                return 'end_client';
            case 'application_instance':
                return 'application_instance';
            case 'licence_service':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_mail_connexion_conf = Entity_mail_connexion_conf;
