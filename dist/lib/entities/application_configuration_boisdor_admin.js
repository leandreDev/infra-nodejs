"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_boisdor_admin = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  config boisdor admin
*/
class Entity_application_configuration_boisdor_admin extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_boisdor_admin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["boisdorBddUrl"] != undefined) {
            obj["boisdorBddUrl"] = obj["boisdorBddUrl"].toString();
        }
        if (obj["boisdorAdminService"] != undefined) {
            obj["boisdorAdminService"] = obj["boisdorAdminService"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            obj["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["boisdorMailService"] != undefined) {
            obj["boisdorMailService"] = obj["boisdorMailService"].toString();
        }
    }
    static checkboisdorBddUrl(val, path = null) {
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
    static checkboisdorAdminService(val, path = null) {
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
    static checkfsoUrl(val, path = null) {
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
    static checkboisdorMailService(val, path = null) {
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
        if (target.boisdorBddUrl != null && target.boisdorBddUrl != undefined) {
            res = Entity_application_configuration_boisdor_admin.checkboisdorBddUrl(target.boisdorBddUrl, `${path}.boisdorBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdorAdminService != null && target.boisdorAdminService != undefined) {
            res = Entity_application_configuration_boisdor_admin.checkboisdorAdminService(target.boisdorAdminService, `${path}.boisdorAdminService`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.fsoUrl != null && target.fsoUrl != undefined) {
            res = Entity_application_configuration_boisdor_admin.checkfsoUrl(target.fsoUrl, `${path}.fsoUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdorMailService != null && target.boisdorMailService != undefined) {
            res = Entity_application_configuration_boisdor_admin.checkboisdorMailService(target.boisdorMailService, `${path}.boisdorMailService`);
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
            case 'boisdorBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'boisdorAdminService':
                //string
                return new String(value).valueOf();
                break;
            case 'fsoUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'boisdorMailService':
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
            case 'boisdorBddUrl':
                return null;
            case 'boisdorAdminService':
                return null;
            case 'fsoUrl':
                return null;
            case 'boisdorMailService':
                return null;
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_boisdor_admin = Entity_application_configuration_boisdor_admin;
