"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_aclIdentity = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  description d'une identit   pour l'acl
*/
class Entity_aclIdentity extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'aclIdentity' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                obj["end_client"] = new utils_1.mongo.ObjectId(obj["end_client"]);
            }
            else if (obj["end_client"]._id) {
                obj["end_client"] = new utils_1.mongo.ObjectId(obj["end_client"]._id);
            }
        }
        if (obj["applicaton_instance"] != undefined) {
            if (_.isString(obj["applicaton_instance"])) {
                obj["applicaton_instance"] = new utils_1.mongo.ObjectId(obj["applicaton_instance"]);
            }
            else if (obj["applicaton_instance"]._id) {
                obj["applicaton_instance"] = new utils_1.mongo.ObjectId(obj["applicaton_instance"]._id);
            }
        }
        if (obj["role"] != undefined) {
            obj["role"] = obj["role"].toString();
        }
        if (obj["user"] != undefined) {
            if (_.isString(obj["user"])) {
                obj["user"] = new utils_1.mongo.ObjectId(obj["user"]);
            }
            else if (obj["user"]._id) {
                obj["user"] = new utils_1.mongo.ObjectId(obj["user"]._id);
            }
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
    static checkapplicaton_instance(val, path = null) {
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
    static checkrole(val, path = null) {
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
    static checkuser(val, path = null) {
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
        if (target.end_client != null && target.end_client != undefined) {
            res = Entity_aclIdentity.checkend_client(target.end_client, `${path}.end_client`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.applicaton_instance != null && target.applicaton_instance != undefined) {
            res = Entity_aclIdentity.checkapplicaton_instance(target.applicaton_instance, `${path}.applicaton_instance`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.role != null && target.role != undefined) {
            res = Entity_aclIdentity.checkrole(target.role, `${path}.role`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.user != null && target.user != undefined) {
            res = Entity_aclIdentity.checkuser(target.user, `${path}.user`);
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
            case 'end_client':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'applicaton_instance':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'role':
                //string
                return new String(value).valueOf();
                break;
            case 'user':
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
            case 'end_client':
                return 'end_client';
            case 'applicaton_instance':
                return 'application_instance';
            case 'role':
                return null;
            case 'user':
                return 'oidc_account';
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_aclIdentity = Entity_aclIdentity;
