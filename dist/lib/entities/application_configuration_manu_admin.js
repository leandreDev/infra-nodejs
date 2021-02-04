"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_manu_admin = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  cond des comptoire de l'or admin
*/
class Entity_application_configuration_manu_admin extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_manu_admin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["bddApiUrl"] != undefined) {
            obj["bddApiUrl"] = obj["bddApiUrl"].toString();
        }
        if (obj["serviceUrl"] != undefined) {
            obj["serviceUrl"] = obj["serviceUrl"].toString();
        }
    }
    static checkbddApiUrl(val, path = null) {
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
    static checkserviceUrl(val, path = null) {
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
        if (target.bddApiUrl != null && target.bddApiUrl != undefined) {
            res = Entity_application_configuration_manu_admin.checkbddApiUrl(target.bddApiUrl, `${path}.bddApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.serviceUrl != null && target.serviceUrl != undefined) {
            res = Entity_application_configuration_manu_admin.checkserviceUrl(target.serviceUrl, `${path}.serviceUrl`);
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
            case 'bddApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'serviceUrl':
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
            case 'bddApiUrl':
                return null;
            case 'serviceUrl':
                return null;
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_manu_admin = Entity_application_configuration_manu_admin;
//# sourceMappingURL=application_configuration_manu_admin.js.map