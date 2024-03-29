"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_supervision = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  service_supervision
*/
class Entity_service_supervision extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_supervision' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["mongoosePath"] != undefined) {
            obj["mongoosePath"] = obj["mongoosePath"].toString();
        }
        if (obj["mongoAuthSource"] != undefined) {
            obj["mongoAuthSource"] = obj["mongoAuthSource"].toString();
        }
        if (obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])) {
            obj["services"].forEach((value) => {
                Index.Entity_service_supervision_service_conf.cast(value);
            });
        }
    }
    static checkmongoosePath(val, path = null) {
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
    static checkmongoAuthSource(val, path = null) {
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
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_service_supervision_service_conf.check(val, false, path);
            //596cafee3c06adb9a62ee49b
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
        if (target.mongoosePath != null && target.mongoosePath != undefined) {
            res = Entity_service_supervision.checkmongoosePath(target.mongoosePath, `${path}.mongoosePath`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.mongoAuthSource != null && target.mongoAuthSource != undefined) {
            res = Entity_service_supervision.checkmongoAuthSource(target.mongoAuthSource, `${path}.mongoAuthSource`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.services != null && target.services != undefined) {
            target.services.forEach((data, index) => {
                res = Entity_service_supervision.checkservices(target.services[index], `${path}.services.${index}`);
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
            case 'mongoosePath':
                //string
                return new String(value).valueOf();
                break;
            case 'mongoAuthSource':
                //string
                return new String(value).valueOf();
                break;
            case 'services':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_service_supervision_service_conf.castQueryParam(subPath, value);
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
            case 'mongoosePath':
                return null;
            case 'mongoAuthSource':
                return null;
            case 'services':
                return Index.Entity_service_supervision_service_conf.getClassNameOfProp(subPath);
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_supervision = Entity_service_supervision;
