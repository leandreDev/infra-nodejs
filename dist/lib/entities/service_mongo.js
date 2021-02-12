"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_mongo = void 0;
const Index = require("./Index");
const service_1 = require("./service");
/**
  configure un service mongo
*/
class Entity_service_mongo extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_mongo' && [].indexOf(obj._class) !== -1) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (target.mongoosePath != null && target.mongoosePath != undefined) {
            res = Entity_service_mongo.checkmongoosePath(target.mongoosePath, `${path}.mongoosePath`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.mongoAuthSource != null && target.mongoAuthSource != undefined) {
            res = Entity_service_mongo.checkmongoAuthSource(target.mongoAuthSource, `${path}.mongoAuthSource`);
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
            case 'mongoosePath':
                //string
                return new String(value).valueOf();
                break;
            case 'mongoAuthSource':
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
            case 'mongoosePath':
                return null;
            case 'mongoAuthSource':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_mongo = Entity_service_mongo;
