"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_socketIo = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  communication temps réelle multi format
*/
class Entity_service_socketIo extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_socketIo' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["returnValue"] != undefined) {
            obj["returnValue"] = obj["returnValue"].toString();
        }
        if (obj["allowCrossOrigin"] != undefined) {
            obj["allowCrossOrigin"] = new Boolean(obj["allowCrossOrigin"]).valueOf();
        }
        if (obj["socketIo"] != undefined) {
            Index.Entity_socketIoConfig.cast(obj["socketIo"]);
            //59e9f53e6f57db7c2c87710f
        }
    }
    static checkreturnValue(val, path = null) {
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
    static checkallowCrossOrigin(val, path = null) {
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
    static checksocketIo(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_socketIoConfig.check(val, false, path);
            //59e9f53e6f57db7c2c87710f
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
        if (target.returnValue != null && target.returnValue != undefined) {
            res = Entity_service_socketIo.checkreturnValue(target.returnValue, `${path}.returnValue`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.allowCrossOrigin != null && target.allowCrossOrigin != undefined) {
            res = Entity_service_socketIo.checkallowCrossOrigin(target.allowCrossOrigin, `${path}.allowCrossOrigin`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.socketIo != null && target.socketIo != undefined) {
            res = Entity_service_socketIo.checksocketIo(target.socketIo, `${path}.socketIo`);
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
            case 'returnValue':
                //string
                return new String(value).valueOf();
                break;
            case 'allowCrossOrigin':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'socketIo':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_socketIoConfig.castQueryParam(subPath, value);
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
            case 'returnValue':
                return null;
            case 'allowCrossOrigin':
                return null;
            case 'socketIo':
                return Index.Entity_socketIoConfig.getClassNameOfProp(subPath);
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_socketIo = Entity_service_socketIo;
//# sourceMappingURL=service_socketIo.js.map