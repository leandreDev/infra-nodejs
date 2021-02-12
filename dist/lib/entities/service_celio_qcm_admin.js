"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_celio_qcm_admin = void 0;
const Index = require("./Index");
const service_1 = require("./service");
/**
  service celio qcm admin
*/
class Entity_service_celio_qcm_admin extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_celio_qcm_admin' && [].indexOf(obj._class) !== -1) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.bddUrl == null || target.bddUrl == undefined)) {
            err.push(path + ".bddUrl is required");
        }
        if (target.bddUrl != null && target.bddUrl != undefined) {
            res = Entity_service_celio_qcm_admin.checkbddUrl(target.bddUrl, `${path}.bddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.serviceFidUrl == null || target.serviceFidUrl == undefined)) {
            err.push(path + ".serviceFidUrl is required");
        }
        if (target.serviceFidUrl != null && target.serviceFidUrl != undefined) {
            res = Entity_service_celio_qcm_admin.checkserviceFidUrl(target.serviceFidUrl, `${path}.serviceFidUrl`);
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
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_celio_qcm_admin = Entity_service_celio_qcm_admin;
