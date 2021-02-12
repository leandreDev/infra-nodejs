"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_qbp_admin = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  config qbp admin
*/
class Entity_application_configuration_qbp_admin extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_qbp_admin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["qbpBddUrl"] != undefined) {
            obj["qbpBddUrl"] = obj["qbpBddUrl"].toString();
        }
        if (obj["qbpAdminService"] != undefined) {
            obj["qbpAdminService"] = obj["qbpAdminService"].toString();
        }
        if (obj["qbpFsoUrl"] != undefined) {
            obj["qbpFsoUrl"] = obj["qbpFsoUrl"].toString();
        }
    }
    static checkqbpBddUrl(val, path = null) {
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
    static checkqbpAdminService(val, path = null) {
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
    static checkqbpFsoUrl(val, path = null) {
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
        if (target.qbpBddUrl != null && target.qbpBddUrl != undefined) {
            res = Entity_application_configuration_qbp_admin.checkqbpBddUrl(target.qbpBddUrl, `${path}.qbpBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.qbpAdminService != null && target.qbpAdminService != undefined) {
            res = Entity_application_configuration_qbp_admin.checkqbpAdminService(target.qbpAdminService, `${path}.qbpAdminService`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.qbpFsoUrl != null && target.qbpFsoUrl != undefined) {
            res = Entity_application_configuration_qbp_admin.checkqbpFsoUrl(target.qbpFsoUrl, `${path}.qbpFsoUrl`);
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
            case 'qbpBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'qbpAdminService':
                //string
                return new String(value).valueOf();
                break;
            case 'qbpFsoUrl':
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
            case 'qbpBddUrl':
                return null;
            case 'qbpAdminService':
                return null;
            case 'qbpFsoUrl':
                return null;
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_qbp_admin = Entity_application_configuration_qbp_admin;
//# sourceMappingURL=application_configuration_qbp_admin.js.map