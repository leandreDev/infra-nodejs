"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_ftpConf = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  configuration ftp
*/
class Entity_ftpConf extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'ftpConf' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["host"] != undefined) {
            obj["host"] = obj["host"].toString();
        }
        if (obj["port"] != undefined) {
            obj["port"] = new Number(obj["port"]).valueOf();
        }
        if (obj["username"] != undefined) {
            obj["username"] = obj["username"].toString();
        }
        if (obj["password"] != undefined) {
            obj["password"] = obj["password"].toString();
        }
    }
    static checkhost(val, path = null) {
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
    static checkport(val, path = null) {
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
    static checkusername(val, path = null) {
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
    static checkpassword(val, path = null) {
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
        if (isCompleteObj && (target.host == null || target.host == undefined)) {
            err.push(path + ".host is required");
        }
        if (target.host != null && target.host != undefined) {
            res = Entity_ftpConf.checkhost(target.host, `${path}.host`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.port == null || target.port == undefined)) {
            err.push(path + ".port is required");
        }
        if (target.port != null && target.port != undefined) {
            res = Entity_ftpConf.checkport(target.port, `${path}.port`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.username == null || target.username == undefined)) {
            err.push(path + ".username is required");
        }
        if (target.username != null && target.username != undefined) {
            res = Entity_ftpConf.checkusername(target.username, `${path}.username`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.password != null && target.password != undefined) {
            res = Entity_ftpConf.checkpassword(target.password, `${path}.password`);
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
            case 'host':
                //string
                return new String(value).valueOf();
                break;
            case 'port':
                //number
                return new Number(value).valueOf();
                break;
            case 'username':
                //string
                return new String(value).valueOf();
                break;
            case 'password':
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
            case 'host':
                return null;
            case 'port':
                return null;
            case 'username':
                return null;
            case 'password':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_ftpConf = Entity_ftpConf;
