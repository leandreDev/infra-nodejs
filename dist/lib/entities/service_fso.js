"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_fso = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  remote file system
*/
class Entity_service_fso extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_fso' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["filePath"] != undefined) {
            obj["filePath"] = obj["filePath"].toString();
        }
        if (obj["bddServiceUrl"] != undefined) {
            obj["bddServiceUrl"] = obj["bddServiceUrl"].toString();
        }
        if (obj["proxy"] != undefined && obj["proxy"] != null && _.isArray(obj["proxy"])) {
            obj["proxy"].forEach((value) => {
                Index.Entity_name_value.cast(value);
            });
        }
    }
    static checkfilePath(val, path = null) {
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
    static checkbddServiceUrl(val, path = null) {
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
    static checkproxy(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_name_value.check(val, false, path);
            //59c62581c3c9d3a0f9e88616
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.filePath == null || target.filePath == undefined)) {
            err.push(path + ".filePath is required");
        }
        if (target.filePath != null && target.filePath != undefined) {
            res = Entity_service_fso.checkfilePath(target.filePath, `${path}.filePath`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.bddServiceUrl == null || target.bddServiceUrl == undefined)) {
            err.push(path + ".bddServiceUrl is required");
        }
        if (target.bddServiceUrl != null && target.bddServiceUrl != undefined) {
            res = Entity_service_fso.checkbddServiceUrl(target.bddServiceUrl, `${path}.bddServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.proxy != null && target.proxy != undefined) {
            target.proxy.forEach((data, index) => {
                res = Entity_service_fso.checkproxy(target.proxy[index], `${path}.proxy.${index}`);
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
            case 'filePath':
                //string
                return new String(value).valueOf();
                break;
            case 'bddServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'proxy':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_name_value.castQueryParam(subPath, value);
                }
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
            case 'filePath':
                return null;
            case 'bddServiceUrl':
                return null;
            case 'proxy':
                return Index.Entity_name_value.getClassNameOfProp(subPath);
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_fso = Entity_service_fso;
