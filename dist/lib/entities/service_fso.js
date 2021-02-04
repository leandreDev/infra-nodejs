"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_fso = void 0;
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
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_fso = Entity_service_fso;
//# sourceMappingURL=service_fso.js.map