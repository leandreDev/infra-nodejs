"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity__acl = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  Acl d'un enregistrement
*/
class Entity__acl extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != '_acl' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["creator"] != undefined) {
            if (_.isString(obj["creator"])) {
                obj["creator"] = new utils_1.mongo.ObjectId(obj["creator"]);
            }
            else if (obj["creator"]._id) {
                obj["creator"] = new utils_1.mongo.ObjectId(obj["creator"]._id);
            }
        }
        if (obj["readers"] != undefined && obj["readers"] != null && _.isArray(obj["readers"])) {
            obj["readers"].forEach((value) => {
                Index.Entity_aclIdentity.cast(value);
            });
        }
        if (obj["writers"] != undefined && obj["writers"] != null && _.isArray(obj["writers"])) {
            obj["writers"].forEach((value) => {
                Index.Entity_aclIdentity.cast(value);
            });
        }
        if (obj["admins"] != undefined && obj["admins"] != null && _.isArray(obj["admins"])) {
            obj["admins"].forEach((value) => {
                Index.Entity_aclIdentity.cast(value);
            });
        }
    }
    static checkcreator(val, path = null) {
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
    static checkreaders(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_aclIdentity.check(val, false, path);
            //5a59d27f66b439c55817d540
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkwriters(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_aclIdentity.check(val, false, path);
            //5a59d27f66b439c55817d540
        }
        res = [...res, ...result];
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
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_aclIdentity.check(val, false, path);
            //5a59d27f66b439c55817d540
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
        if (target.creator != null && target.creator != undefined) {
            res = Entity__acl.checkcreator(target.creator, `${path}.creator`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.readers != null && target.readers != undefined) {
            target.readers.forEach((data, index) => {
                res = Entity__acl.checkreaders(target.readers[index], `${path}.readers.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.writers != null && target.writers != undefined) {
            target.writers.forEach((data, index) => {
                res = Entity__acl.checkwriters(target.writers[index], `${path}.writers.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.admins != null && target.admins != undefined) {
            target.admins.forEach((data, index) => {
                res = Entity__acl.checkadmins(target.admins[index], `${path}.admins.${index}`);
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
            case 'creator':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'readers':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_aclIdentity.castQueryParam(subPath, value);
                }
                break;
            case 'writers':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_aclIdentity.castQueryParam(subPath, value);
                }
                break;
            case 'admins':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_aclIdentity.castQueryParam(subPath, value);
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
            case 'creator':
                return 'oidc_account';
            case 'readers':
                return Index.Entity_aclIdentity.getClassNameOfProp(subPath);
            case 'writers':
                return Index.Entity_aclIdentity.getClassNameOfProp(subPath);
            case 'admins':
                return Index.Entity_aclIdentity.getClassNameOfProp(subPath);
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity__acl = Entity__acl;
//# sourceMappingURL=_acl.js.map