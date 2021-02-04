"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_Service_scorm_gateway = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
const service_1 = require("./service");
/**
  service passerelle d'un package scorm vers l'interne
*/
class Entity_Service_scorm_gateway extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'Service_scorm_gateway' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["privateKey"] != undefined) {
            obj["privateKey"] = obj["privateKey"].toString();
        }
        if (obj["endClientId"] != undefined) {
            if (_.isString(obj["endClientId"])) {
                obj["endClientId"] = new utils_1.mongo.ObjectId(obj["endClientId"]);
            }
            else if (obj["endClientId"]._id) {
                obj["endClientId"] = new utils_1.mongo.ObjectId(obj["endClientId"]._id);
            }
        }
        if (obj["signinUrl"] != undefined) {
            obj["signinUrl"] = obj["signinUrl"].toString();
        }
        if (obj["licenceUrl"] != undefined) {
            obj["licenceUrl"] = obj["licenceUrl"].toString();
        }
        if (obj["templateUser"] != undefined) {
            obj["templateUser"] = obj["templateUser"];
        }
        if (obj["templateProfileUser"] != undefined) {
            obj["templateProfileUser"] = obj["templateProfileUser"];
        }
        if (obj["apiUrl"] != undefined) {
            obj["apiUrl"] = obj["apiUrl"].toString();
        }
    }
    static checkprivateKey(val, path = null) {
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
    static checkendClientId(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
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
    static checklicenceUrl(val, path = null) {
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
    static checktemplateUser(val, path = null) {
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
    static checktemplateProfileUser(val, path = null) {
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.privateKey == null || target.privateKey == undefined)) {
            err.push(path + ".privateKey is required");
        }
        if (target.privateKey != null && target.privateKey != undefined) {
            res = Entity_Service_scorm_gateway.checkprivateKey(target.privateKey, `${path}.privateKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.endClientId == null || target.endClientId == undefined)) {
            err.push(path + ".endClientId is required");
        }
        if (target.endClientId != null && target.endClientId != undefined) {
            res = Entity_Service_scorm_gateway.checkendClientId(target.endClientId, `${path}.endClientId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.signinUrl == null || target.signinUrl == undefined)) {
            err.push(path + ".signinUrl is required");
        }
        if (target.signinUrl != null && target.signinUrl != undefined) {
            res = Entity_Service_scorm_gateway.checksigninUrl(target.signinUrl, `${path}.signinUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.licenceUrl == null || target.licenceUrl == undefined)) {
            err.push(path + ".licenceUrl is required");
        }
        if (target.licenceUrl != null && target.licenceUrl != undefined) {
            res = Entity_Service_scorm_gateway.checklicenceUrl(target.licenceUrl, `${path}.licenceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.templateUser == null || target.templateUser == undefined)) {
            err.push(path + ".templateUser is required");
        }
        if (target.templateUser != null && target.templateUser != undefined) {
            res = Entity_Service_scorm_gateway.checktemplateUser(target.templateUser, `${path}.templateUser`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.templateProfileUser == null || target.templateProfileUser == undefined)) {
            err.push(path + ".templateProfileUser is required");
        }
        if (target.templateProfileUser != null && target.templateProfileUser != undefined) {
            res = Entity_Service_scorm_gateway.checktemplateProfileUser(target.templateProfileUser, `${path}.templateProfileUser`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.apiUrl != null && target.apiUrl != undefined) {
            res = Entity_Service_scorm_gateway.checkapiUrl(target.apiUrl, `${path}.apiUrl`);
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
            case 'privateKey':
                //string
                return new String(value).valueOf();
                break;
            case 'endClientId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'signinUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'licenceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'templateUser':
                //object
                return value;
                break;
            case 'templateProfileUser':
                //object
                return value;
                break;
            case 'apiUrl':
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
            case 'privateKey':
                return null;
            case 'endClientId':
                return 'end_client';
            case 'signinUrl':
                return null;
            case 'licenceUrl':
                return null;
            case 'templateUser':
                return null;
            case 'templateProfileUser':
                return null;
            case 'apiUrl':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_Service_scorm_gateway = Entity_Service_scorm_gateway;
//# sourceMappingURL=Service_scorm_gateway.js.map