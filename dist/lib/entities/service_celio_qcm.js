"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_celio_qcm = void 0;
const Index = require("./Index");
const service_1 = require("./service");
/**
  service celio qcm
*/
class Entity_service_celio_qcm extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_celio_qcm' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["bddUrl"] != undefined) {
            obj["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["serviceFidUrl"] != undefined) {
            obj["serviceFidUrl"] = obj["serviceFidUrl"].toString();
        }
        if (obj["secretToken"] != undefined) {
            obj["secretToken"] = obj["secretToken"].toString();
        }
        if (obj["serverUrl"] != undefined) {
            obj["serverUrl"] = obj["serverUrl"].toString();
        }
        if (obj["caPath"] != undefined) {
            obj["caPath"] = obj["caPath"].toString();
        }
    }
    static checkbddUrl(val, path = null) {
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
    static checkserviceFidUrl(val, path = null) {
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
    static checksecretToken(val, path = null) {
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
    static checkserverUrl(val, path = null) {
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
    static checkcaPath(val, path = null) {
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
        if (isCompleteObj && (target.bddUrl == null || target.bddUrl == undefined)) {
            err.push(path + ".bddUrl is required");
        }
        if (target.bddUrl != null && target.bddUrl != undefined) {
            res = Entity_service_celio_qcm.checkbddUrl(target.bddUrl, `${path}.bddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.serviceFidUrl == null || target.serviceFidUrl == undefined)) {
            err.push(path + ".serviceFidUrl is required");
        }
        if (target.serviceFidUrl != null && target.serviceFidUrl != undefined) {
            res = Entity_service_celio_qcm.checkserviceFidUrl(target.serviceFidUrl, `${path}.serviceFidUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.secretToken != null && target.secretToken != undefined) {
            res = Entity_service_celio_qcm.checksecretToken(target.secretToken, `${path}.secretToken`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.serverUrl != null && target.serverUrl != undefined) {
            res = Entity_service_celio_qcm.checkserverUrl(target.serverUrl, `${path}.serverUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.caPath != null && target.caPath != undefined) {
            res = Entity_service_celio_qcm.checkcaPath(target.caPath, `${path}.caPath`);
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
            case 'bddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'serviceFidUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'secretToken':
                //string
                return new String(value).valueOf();
                break;
            case 'serverUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'caPath':
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
            case 'bddUrl':
                return null;
            case 'serviceFidUrl':
                return null;
            case 'secretToken':
                return null;
            case 'serverUrl':
                return null;
            case 'caPath':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_celio_qcm = Entity_service_celio_qcm;
//# sourceMappingURL=service_celio_qcm.js.map