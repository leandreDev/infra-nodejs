"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_entity_source = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  association d'une entité et de l'url de son service
*/
class Entity_entity_source extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'entity_source' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["url"] != undefined) {
            obj["url"] = obj["url"].toString();
        }
        if (obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])) {
            obj["entityName"] = obj["entityName"].map((value) => {
                return value.toString();
            });
        }
    }
    static checkurl(val, path = null) {
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
    static checkentityName(val, path = null) {
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
        if (target.url != null && target.url != undefined) {
            res = Entity_entity_source.checkurl(target.url, `${path}.url`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.entityName != null && target.entityName != undefined) {
            target.entityName.forEach((data, index) => {
                res = Entity_entity_source.checkentityName(target.entityName[index], `${path}.entityName.${index}`);
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
            case 'url':
                //string
                return new String(value).valueOf();
                break;
            case 'entityName':
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
            case 'url':
                return null;
            case 'entityName':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_entity_source = Entity_entity_source;
