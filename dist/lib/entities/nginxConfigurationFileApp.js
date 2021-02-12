"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_nginxConfigurationFileApp = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  description d'un fichier de configuration nginx
*/
class Entity_nginxConfigurationFileApp extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'nginxConfigurationFileApp' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["suffix"] != undefined) {
            obj["suffix"] = obj["suffix"].toString();
        }
        if (obj["template"] != undefined) {
            obj["template"] = obj["template"].toString();
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
        if (obj["clients"] != undefined && obj["clients"] != null && _.isArray(obj["clients"])) {
            obj["clients"] = obj["clients"].map((value) => {
                if (_.isString(value)) {
                    return new utils_1.mongo.ObjectId(value);
                }
                else if (value._id) {
                    return new utils_1.mongo.ObjectId(value._id);
                }
            });
        }
    }
    static checksuffix(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!val.match(/[^ \/\\]*/)) {
            res.push(`${path} dont match [^ \/\\]*`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checktemplate(val, path = null) {
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
    static checkclients(val, path = null) {
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
        if (target.suffix != null && target.suffix != undefined) {
            res = Entity_nginxConfigurationFileApp.checksuffix(target.suffix, `${path}.suffix`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.template != null && target.template != undefined) {
            res = Entity_nginxConfigurationFileApp.checktemplate(target.template, `${path}.template`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.applications == null || target.applications == undefined)) {
            err.push(path + ".applications is required");
        }
        if (target.applications != null && target.applications != undefined) {
            target.applications.forEach((data, index) => {
                res = Entity_nginxConfigurationFileApp.checkapplications(target.applications[index], `${path}.applications.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (isCompleteObj && (target.clients == null || target.clients == undefined)) {
            err.push(path + ".clients is required");
        }
        if (target.clients != null && target.clients != undefined) {
            target.clients.forEach((data, index) => {
                res = Entity_nginxConfigurationFileApp.checkclients(target.clients[index], `${path}.clients.${index}`);
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
            case 'suffix':
                //string
                return new String(value).valueOf();
                break;
            case 'template':
                //texte
                return new String(value).valueOf();
                break;
            case 'applications':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'clients':
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
            case 'suffix':
                return null;
            case 'template':
                return null;
            case 'applications':
                return 'application_instance';
            case 'clients':
                return 'end_client';
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_nginxConfigurationFileApp = Entity_nginxConfigurationFileApp;
