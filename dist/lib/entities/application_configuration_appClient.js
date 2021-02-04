"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_appClient = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  c'est la configuration d'une application Client
*/
class Entity_application_configuration_appClient extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_appClient' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["configurationUrlDb"] != undefined) {
            obj["configurationUrlDb"] = obj["configurationUrlDb"].toString();
        }
        if (obj["urlBase"] != undefined) {
            obj["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["signinUrl"] != undefined) {
            obj["signinUrl"] = obj["signinUrl"].toString();
        }
        if (obj["serviceSessionUrl"] != undefined) {
            obj["serviceSessionUrl"] = obj["serviceSessionUrl"].toString();
        }
        if (obj["clientServiceUrl"] != undefined) {
            obj["clientServiceUrl"] = obj["clientServiceUrl"].toString();
        }
        if (obj["aclTemplate"] != undefined) {
            Index.Entity__acl.cast(obj["aclTemplate"]);
            //5a3bae759167362268af288b
        }
    }
    static checkconfigurationUrlDb(val, path = null) {
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
    static checkurlBase(val, path = null) {
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
    static checksigninUrl(val, path = null) {
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
    static checkserviceSessionUrl(val, path = null) {
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
    static checkclientServiceUrl(val, path = null) {
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
    static checkaclTemplate(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity__acl.check(val, false, path);
            //5a3bae759167362268af288b
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
        err = application_configuration_1.Entity_application_configuration.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.configurationUrlDb == null || target.configurationUrlDb == undefined)) {
            err.push(path + ".configurationUrlDb is required");
        }
        if (target.configurationUrlDb != null && target.configurationUrlDb != undefined) {
            res = Entity_application_configuration_appClient.checkconfigurationUrlDb(target.configurationUrlDb, `${path}.configurationUrlDb`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.urlBase == null || target.urlBase == undefined)) {
            err.push(path + ".urlBase is required");
        }
        if (target.urlBase != null && target.urlBase != undefined) {
            res = Entity_application_configuration_appClient.checkurlBase(target.urlBase, `${path}.urlBase`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.signinUrl == null || target.signinUrl == undefined)) {
            err.push(path + ".signinUrl is required");
        }
        if (target.signinUrl != null && target.signinUrl != undefined) {
            res = Entity_application_configuration_appClient.checksigninUrl(target.signinUrl, `${path}.signinUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.serviceSessionUrl == null || target.serviceSessionUrl == undefined)) {
            err.push(path + ".serviceSessionUrl is required");
        }
        if (target.serviceSessionUrl != null && target.serviceSessionUrl != undefined) {
            res = Entity_application_configuration_appClient.checkserviceSessionUrl(target.serviceSessionUrl, `${path}.serviceSessionUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.clientServiceUrl == null || target.clientServiceUrl == undefined)) {
            err.push(path + ".clientServiceUrl is required");
        }
        if (target.clientServiceUrl != null && target.clientServiceUrl != undefined) {
            res = Entity_application_configuration_appClient.checkclientServiceUrl(target.clientServiceUrl, `${path}.clientServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.aclTemplate != null && target.aclTemplate != undefined) {
            res = Entity_application_configuration_appClient.checkaclTemplate(target.aclTemplate, `${path}.aclTemplate`);
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
            case 'configurationUrlDb':
                //string
                return new String(value).valueOf();
                break;
            case 'urlBase':
                //string
                return new String(value).valueOf();
                break;
            case 'signinUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'serviceSessionUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'clientServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'aclTemplate':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity__acl.castQueryParam(subPath, value);
                }
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
            case 'configurationUrlDb':
                return null;
            case 'urlBase':
                return null;
            case 'signinUrl':
                return null;
            case 'serviceSessionUrl':
                return null;
            case 'clientServiceUrl':
                return null;
            case 'aclTemplate':
                return Index.Entity__acl.getClassNameOfProp(subPath);
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_appClient = Entity_application_configuration_appClient;
//# sourceMappingURL=application_configuration_appClient.js.map