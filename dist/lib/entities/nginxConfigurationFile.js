"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_nginxConfigurationFile = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  description d'un fichier de configuration nginx
*/
class Entity_nginxConfigurationFile extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'nginxConfigurationFile' && [].indexOf(obj._class) !== -1) {
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
        if (obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])) {
            obj["services"] = obj["services"].map((value) => {
                if (_.isString(value)) {
                    return new utils_1.mongo.ObjectId(value);
                }
                else if (value._id) {
                    return new utils_1.mongo.ObjectId(value._id);
                }
                else if (value._bsontype && value._bsontype === 'ObjectID') {
                    return value;
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
    static checkservices(val, path = null) {
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
            res = Entity_nginxConfigurationFile.checksuffix(target.suffix, `${path}.suffix`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.template != null && target.template != undefined) {
            res = Entity_nginxConfigurationFile.checktemplate(target.template, `${path}.template`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.services != null && target.services != undefined) {
            target.services.forEach((data, index) => {
                res = Entity_nginxConfigurationFile.checkservices(target.services[index], `${path}.services.${index}`);
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
            case 'services':
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
            case 'services':
                return 'service';
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_nginxConfigurationFile = Entity_nginxConfigurationFile;
