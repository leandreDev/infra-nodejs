"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_end_client = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  c'est le client que l'on facture
*/
class Entity_end_client extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'end_client' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["label"] != undefined) {
            obj["label"] = obj["label"].toString();
        }
        if (obj["applications"] != undefined && obj["applications"] != null && _.isArray(obj["applications"])) {
            obj["applications"] = obj["applications"].map((value) => {
                if (_.isString(value)) {
                    return new utils_1.mongo.ObjectId(value);
                }
                else if (value._id) {
                    return new utils_1.mongo.ObjectId(value._id);
                }
            });
        }
        if (obj["admins"] != undefined && obj["admins"] != null && _.isArray(obj["admins"])) {
            obj["admins"] = obj["admins"].map((value) => {
                if (_.isString(value)) {
                    return new utils_1.mongo.ObjectId(value);
                }
                else if (value._id) {
                    return new utils_1.mongo.ObjectId(value._id);
                }
            });
        }
        if (obj["licenceStore"] != undefined && obj["licenceStore"] != null && _.isArray(obj["licenceStore"])) {
            obj["licenceStore"].forEach((value) => {
                Index.Entity_licenceStore.cast(value);
            });
        }
        if (obj["client_notices"] != undefined && obj["client_notices"] != null && _.isArray(obj["client_notices"])) {
            obj["client_notices"].forEach((value) => {
                Index.Entity_notice_field.cast(value);
            });
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
    static checklabel(val, path = null) {
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
    static checkapplications(val, path = null) {
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
    static checkadmins(val, path = null) {
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
    static checklicenceStore(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_licenceStore.check(val, false, path);
            //59d8d09becc25ab21561f141
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkclient_notices(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_notice_field.check(val, false, path);
            //5b8d5508e3adbfaef1bca412
        }
        res = [...res, ...result];
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
        if (target.name != null && target.name != undefined) {
            res = Entity_end_client.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.label != null && target.label != undefined) {
            res = Entity_end_client.checklabel(target.label, `${path}.label`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.applications != null && target.applications != undefined) {
            target.applications.forEach((data, index) => {
                res = Entity_end_client.checkapplications(target.applications[index], `${path}.applications.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.admins != null && target.admins != undefined) {
            target.admins.forEach((data, index) => {
                res = Entity_end_client.checkadmins(target.admins[index], `${path}.admins.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.licenceStore != null && target.licenceStore != undefined) {
            target.licenceStore.forEach((data, index) => {
                res = Entity_end_client.checklicenceStore(target.licenceStore[index], `${path}.licenceStore.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.client_notices != null && target.client_notices != undefined) {
            target.client_notices.forEach((data, index) => {
                res = Entity_end_client.checkclient_notices(target.client_notices[index], `${path}.client_notices.${index}`);
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
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'label':
                //string
                return new String(value).valueOf();
                break;
            case 'applications':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'admins':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'licenceStore':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_licenceStore.castQueryParam(subPath, value);
                }
                break;
            case 'client_notices':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_notice_field.castQueryParam(subPath, value);
                }
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
            case 'name':
                return null;
            case 'label':
                return null;
            case 'applications':
                return 'application_instance';
            case 'admins':
                return 'oidc_account';
            case 'licenceStore':
                return Index.Entity_licenceStore.getClassNameOfProp(subPath);
            case 'client_notices':
                return Index.Entity_notice_field.getClassNameOfProp(subPath);
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_end_client = Entity_end_client;
