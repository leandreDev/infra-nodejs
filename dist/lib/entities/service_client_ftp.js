"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_client_ftp = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  client ftps
*/
class Entity_service_client_ftp extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_client_ftp' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["host"] != undefined) {
            obj["host"] = obj["host"].toString();
        }
        if (obj["ftpPort"] != undefined) {
            obj["ftpPort"] = new Number(obj["ftpPort"]).valueOf();
        }
        if (obj["user"] != undefined) {
            obj["user"] = obj["user"].toString();
        }
        if (obj["password"] != undefined) {
            obj["password"] = obj["password"].toString();
        }
        if (obj["downloadPath"] != undefined) {
            obj["downloadPath"] = obj["downloadPath"].toString();
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
    static checkftpPort(val, path = null) {
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
    static checkuser(val, path = null) {
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
    static checkdownloadPath(val, path = null) {
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.host == null || target.host == undefined)) {
            err.push(path + ".host is required");
        }
        if (target.host != null && target.host != undefined) {
            res = Entity_service_client_ftp.checkhost(target.host, `${path}.host`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.ftpPort == null || target.ftpPort == undefined)) {
            err.push(path + ".ftpPort is required");
        }
        if (target.ftpPort != null && target.ftpPort != undefined) {
            res = Entity_service_client_ftp.checkftpPort(target.ftpPort, `${path}.ftpPort`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.user == null || target.user == undefined)) {
            err.push(path + ".user is required");
        }
        if (target.user != null && target.user != undefined) {
            res = Entity_service_client_ftp.checkuser(target.user, `${path}.user`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.password == null || target.password == undefined)) {
            err.push(path + ".password is required");
        }
        if (target.password != null && target.password != undefined) {
            res = Entity_service_client_ftp.checkpassword(target.password, `${path}.password`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.downloadPath == null || target.downloadPath == undefined)) {
            err.push(path + ".downloadPath is required");
        }
        if (target.downloadPath != null && target.downloadPath != undefined) {
            res = Entity_service_client_ftp.checkdownloadPath(target.downloadPath, `${path}.downloadPath`);
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
            case 'ftpPort':
                //number
                return new Number(value).valueOf();
                break;
            case 'user':
                //string
                return new String(value).valueOf();
                break;
            case 'password':
                //string
                return new String(value).valueOf();
                break;
            case 'downloadPath':
                //string
                return new String(value).valueOf();
                break;
            default:
                return service_1.Entity_service.castQueryParam(key, value);
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
            case 'ftpPort':
                return null;
            case 'user':
                return null;
            case 'password':
                return null;
            case 'downloadPath':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_client_ftp = Entity_service_client_ftp;
//# sourceMappingURL=service_client_ftp.js.map