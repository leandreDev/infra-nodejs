"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_supervision_service_conf = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  configuration d'un service dans le superviseur
*/
class Entity_service_supervision_service_conf extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_supervision_service_conf' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["path"] != undefined) {
            obj["path"] = obj["path"].toString();
        }
        if (obj["args"] != undefined && obj["args"] != null && _.isArray(obj["args"])) {
            obj["args"] = obj["args"].map((value) => {
                return value.toString();
            });
        }
        if (obj["options"] != undefined) {
            Index.Entity_node_fork_option.cast(obj["options"]);
            //596cb207ca6e240b7d17e8ed
        }
        if (obj["restart"] != undefined) {
            obj["restart"] = new Boolean(obj["restart"]).valueOf();
        }
        if (obj["maxKill"] != undefined) {
            obj["maxKill"] = new Number(obj["maxKill"]).valueOf();
        }
        if (obj["minTime"] != undefined) {
            obj["minTime"] = new Number(obj["minTime"]).valueOf();
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
    static checkpath(val, path = null) {
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
    static checkargs(val, path = null) {
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
    static checkoptions(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_node_fork_option.check(val, false, path);
            //596cb207ca6e240b7d17e8ed
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkrestart(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isBoolean(val)) {
            res.push(`${path}  is not a boolean`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkmaxKill(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkminTime(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
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
        if (target.name != null && target.name != undefined) {
            res = Entity_service_supervision_service_conf.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.path != null && target.path != undefined) {
            res = Entity_service_supervision_service_conf.checkpath(target.path, `${path}.path`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.args != null && target.args != undefined) {
            target.args.forEach((data, index) => {
                res = Entity_service_supervision_service_conf.checkargs(target.args[index], `${path}.args.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.options != null && target.options != undefined) {
            res = Entity_service_supervision_service_conf.checkoptions(target.options, `${path}.options`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.restart != null && target.restart != undefined) {
            res = Entity_service_supervision_service_conf.checkrestart(target.restart, `${path}.restart`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.maxKill != null && target.maxKill != undefined) {
            res = Entity_service_supervision_service_conf.checkmaxKill(target.maxKill, `${path}.maxKill`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.minTime != null && target.minTime != undefined) {
            res = Entity_service_supervision_service_conf.checkminTime(target.minTime, `${path}.minTime`);
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
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'path':
                //string
                return new String(value).valueOf();
                break;
            case 'args':
                //string
                return new String(value).valueOf();
                break;
            case 'options':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_node_fork_option.castQueryParam(subPath, value);
                }
                break;
            case 'restart':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'maxKill':
                //number
                return new Number(value).valueOf();
                break;
            case 'minTime':
                //number
                return new Number(value).valueOf();
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
            case 'path':
                return null;
            case 'args':
                return null;
            case 'options':
                return Index.Entity_node_fork_option.getClassNameOfProp(subPath);
            case 'restart':
                return null;
            case 'maxKill':
                return null;
            case 'minTime':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_supervision_service_conf = Entity_service_supervision_service_conf;
//# sourceMappingURL=service_supervision_service_conf.js.map