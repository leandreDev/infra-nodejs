"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_r3_admin = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  config r3 admin
*/
class Entity_application_configuration_r3_admin extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_r3_admin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["bddUrl"] != undefined) {
            obj["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["uploadUrl"] != undefined) {
            obj["uploadUrl"] = obj["uploadUrl"].toString();
        }
        if (obj["apiUrl"] != undefined) {
            obj["apiUrl"] = obj["apiUrl"].toString();
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
    static checkuploadUrl(val, path = null) {
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
    static checkapiUrl(val, path = null) {
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
        err = application_configuration_1.Entity_application_configuration.check(target, isCompleteObj, path);
        if (target.bddUrl != null && target.bddUrl != undefined) {
            res = Entity_application_configuration_r3_admin.checkbddUrl(target.bddUrl, `${path}.bddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.uploadUrl != null && target.uploadUrl != undefined) {
            res = Entity_application_configuration_r3_admin.checkuploadUrl(target.uploadUrl, `${path}.uploadUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.apiUrl != null && target.apiUrl != undefined) {
            res = Entity_application_configuration_r3_admin.checkapiUrl(target.apiUrl, `${path}.apiUrl`);
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
            case 'uploadUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'apiUrl':
                //string
                return new String(value).valueOf();
                break;
            default:
                return application_configuration_1.Entity_application_configuration.castQueryParam(key, value);
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
            case 'uploadUrl':
                return null;
            case 'apiUrl':
                return null;
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_r3_admin = Entity_application_configuration_r3_admin;
