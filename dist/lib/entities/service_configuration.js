"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_configuration = void 0;
const Index = require("./Index");
const service_1 = require("./service");
/**
  c'est le service de distribution des configurations des services
*/
class Entity_service_configuration extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_configuration' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["srvUrl"] != undefined) {
            obj["srvUrl"] = obj["srvUrl"].toString();
        }
        if (obj["serviceCollectionName"] != undefined) {
            obj["serviceCollectionName"] = obj["serviceCollectionName"].toString();
        }
        if (obj["serviceConfigCollectionName"] != undefined) {
            obj["serviceConfigCollectionName"] = obj["serviceConfigCollectionName"].toString();
        }
    }
    static checksrvUrl(val, path = null) {
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
    static checkserviceCollectionName(val, path = null) {
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
    static checkserviceConfigCollectionName(val, path = null) {
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
        if (target.srvUrl != null && target.srvUrl != undefined) {
            res = Entity_service_configuration.checksrvUrl(target.srvUrl, `${path}.srvUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.serviceCollectionName != null && target.serviceCollectionName != undefined) {
            res = Entity_service_configuration.checkserviceCollectionName(target.serviceCollectionName, `${path}.serviceCollectionName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.serviceConfigCollectionName != null && target.serviceConfigCollectionName != undefined) {
            res = Entity_service_configuration.checkserviceConfigCollectionName(target.serviceConfigCollectionName, `${path}.serviceConfigCollectionName`);
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
            case 'srvUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'serviceCollectionName':
                //string
                return new String(value).valueOf();
                break;
            case 'serviceConfigCollectionName':
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
            case 'srvUrl':
                return null;
            case 'serviceCollectionName':
                return null;
            case 'serviceConfigCollectionName':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_configuration = Entity_service_configuration;
