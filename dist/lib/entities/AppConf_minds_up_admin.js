"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_AppConf_minds_up_admin = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  config de l'app minds up admin
*/
class Entity_AppConf_minds_up_admin extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'AppConf_minds_up_admin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["apiUrl"] != undefined) {
            obj["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["serviceMindsUpUrl"] != undefined) {
            obj["serviceMindsUpUrl"] = obj["serviceMindsUpUrl"].toString();
        }
        if (obj["rgpd"] != undefined) {
            obj["rgpd"] = obj["rgpd"].toString();
        }
        if (obj["uploadUrl"] != undefined) {
            obj["uploadUrl"] = obj["uploadUrl"].toString();
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
    static checkserviceMindsUpUrl(val, path = null) {
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
    static checkrgpd(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = application_configuration_1.Entity_application_configuration.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.apiUrl == null || target.apiUrl == undefined)) {
            err.push(path + ".apiUrl is required");
        }
        if (target.apiUrl != null && target.apiUrl != undefined) {
            res = Entity_AppConf_minds_up_admin.checkapiUrl(target.apiUrl, `${path}.apiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.serviceMindsUpUrl == null || target.serviceMindsUpUrl == undefined)) {
            err.push(path + ".serviceMindsUpUrl is required");
        }
        if (target.serviceMindsUpUrl != null && target.serviceMindsUpUrl != undefined) {
            res = Entity_AppConf_minds_up_admin.checkserviceMindsUpUrl(target.serviceMindsUpUrl, `${path}.serviceMindsUpUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.rgpd != null && target.rgpd != undefined) {
            res = Entity_AppConf_minds_up_admin.checkrgpd(target.rgpd, `${path}.rgpd`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.uploadUrl == null || target.uploadUrl == undefined)) {
            err.push(path + ".uploadUrl is required");
        }
        if (target.uploadUrl != null && target.uploadUrl != undefined) {
            res = Entity_AppConf_minds_up_admin.checkuploadUrl(target.uploadUrl, `${path}.uploadUrl`);
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
            case 'apiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'serviceMindsUpUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'rgpd':
                //string
                return new String(value).valueOf();
                break;
            case 'uploadUrl':
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
            case 'apiUrl':
                return null;
            case 'serviceMindsUpUrl':
                return null;
            case 'rgpd':
                return null;
            case 'uploadUrl':
                return null;
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_AppConf_minds_up_admin = Entity_AppConf_minds_up_admin;
//# sourceMappingURL=AppConf_minds_up_admin.js.map