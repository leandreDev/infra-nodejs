"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_nginxMultiConfigurator = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_nginxConfigurator_1 = require("./service_nginxConfigurator");
/**
  configuration d'un service nginx multi configuration
*/
class Entity_service_nginxMultiConfigurator extends service_nginxConfigurator_1.Entity_service_nginxConfigurator {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_nginxMultiConfigurator' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_nginxConfigurator_1.Entity_service_nginxConfigurator.cast(obj, true);
        if (obj["nginxUser"] != undefined) {
            obj["nginxUser"] = obj["nginxUser"].toString();
        }
        if (obj["serviceUrl"] != undefined) {
            obj["serviceUrl"] = obj["serviceUrl"].toString();
        }
        if (obj["clientUrl"] != undefined) {
            obj["clientUrl"] = obj["clientUrl"].toString();
        }
        if (obj["appInstanceUrl"] != undefined) {
            obj["appInstanceUrl"] = obj["appInstanceUrl"].toString();
        }
        if (obj["appUrl"] != undefined) {
            obj["appUrl"] = obj["appUrl"].toString();
        }
        if (obj["configurationFile"] != undefined && obj["configurationFile"] != null && _.isArray(obj["configurationFile"])) {
            obj["configurationFile"].forEach((value) => {
                Index.Entity_nginxConfigurationFile.cast(value);
            });
        }
        if (obj["confApplication"] != undefined && obj["confApplication"] != null && _.isArray(obj["confApplication"])) {
            obj["confApplication"].forEach((value) => {
                Index.Entity_nginxConfigurationFileApp.cast(value);
            });
        }
    }
    static checknginxUser(val, path = null) {
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
    static checkclientUrl(val, path = null) {
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
    static checkappInstanceUrl(val, path = null) {
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
    static checkappUrl(val, path = null) {
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
    static checkconfigurationFile(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_nginxConfigurationFile.check(val, false, path);
            //59f6e8b39a022c814d8f152b
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkconfApplication(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_nginxConfigurationFileApp.check(val, false, path);
            //5a213b5ae8d72a364ed22005
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
        err = service_nginxConfigurator_1.Entity_service_nginxConfigurator.check(target, isCompleteObj, path);
        if (target.nginxUser != null && target.nginxUser != undefined) {
            res = Entity_service_nginxMultiConfigurator.checknginxUser(target.nginxUser, `${path}.nginxUser`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.serviceUrl != null && target.serviceUrl != undefined) {
            res = Entity_service_nginxMultiConfigurator.checkserviceUrl(target.serviceUrl, `${path}.serviceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.clientUrl == null || target.clientUrl == undefined)) {
            err.push(path + ".clientUrl is required");
        }
        if (target.clientUrl != null && target.clientUrl != undefined) {
            res = Entity_service_nginxMultiConfigurator.checkclientUrl(target.clientUrl, `${path}.clientUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.appInstanceUrl != null && target.appInstanceUrl != undefined) {
            res = Entity_service_nginxMultiConfigurator.checkappInstanceUrl(target.appInstanceUrl, `${path}.appInstanceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.appUrl == null || target.appUrl == undefined)) {
            err.push(path + ".appUrl is required");
        }
        if (target.appUrl != null && target.appUrl != undefined) {
            res = Entity_service_nginxMultiConfigurator.checkappUrl(target.appUrl, `${path}.appUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.configurationFile != null && target.configurationFile != undefined) {
            target.configurationFile.forEach((data, index) => {
                res = Entity_service_nginxMultiConfigurator.checkconfigurationFile(target.configurationFile[index], `${path}.configurationFile.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.confApplication != null && target.confApplication != undefined) {
            target.confApplication.forEach((data, index) => {
                res = Entity_service_nginxMultiConfigurator.checkconfApplication(target.confApplication[index], `${path}.confApplication.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
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
            case 'nginxUser':
                //string
                return new String(value).valueOf();
                break;
            case 'serviceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'clientUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'appInstanceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'appUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'configurationFile':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_nginxConfigurationFile.castQueryParam(subPath, value);
                }
                break;
            case 'confApplication':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_nginxConfigurationFileApp.castQueryParam(subPath, value);
                }
                break;
            default:
                return service_nginxConfigurator_1.Entity_service_nginxConfigurator.castQueryParam(key, value);
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
            case 'nginxUser':
                return null;
            case 'serviceUrl':
                return null;
            case 'clientUrl':
                return null;
            case 'appInstanceUrl':
                return null;
            case 'appUrl':
                return null;
            case 'configurationFile':
                return Index.Entity_nginxConfigurationFile.getClassNameOfProp(subPath);
            case 'confApplication':
                return Index.Entity_nginxConfigurationFileApp.getClassNameOfProp(subPath);
            default:
                return service_nginxConfigurator_1.Entity_service_nginxConfigurator.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_nginxMultiConfigurator = Entity_service_nginxMultiConfigurator;
