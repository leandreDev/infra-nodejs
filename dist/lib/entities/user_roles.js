"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_user_roles = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  paire utilisateurs role
*/
class Entity_user_roles extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'user_roles' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["user"] != undefined) {
            if (_.isString(obj["user"])) {
                obj["user"] = new utils_1.mongo.ObjectId(obj["user"]);
            }
            else if (obj["user"]._id) {
                obj["user"] = new utils_1.mongo.ObjectId(obj["user"]._id);
            }
        }
        if (obj["roles"] != undefined && obj["roles"] != null && _.isArray(obj["roles"])) {
            obj["roles"] = obj["roles"].map((value) => {
                return value.toString();
            });
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
    static checkroles(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["client", "admin"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of client , admin`);
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
        if (target.user != null && target.user != undefined) {
            res = Entity_user_roles.checkuser(target.user, `${path}.user`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.roles != null && target.roles != undefined) {
            target.roles.forEach((data, index) => {
                res = Entity_user_roles.checkroles(target.roles[index], `${path}.roles.${index}`);
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
            case 'user':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'roles':
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
            case 'user':
                return 'oidc_account';
            case 'roles':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_user_roles = Entity_user_roles;
