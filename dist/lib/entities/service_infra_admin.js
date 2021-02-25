"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_infra_admin = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
const service_1 = require("./service");
/**
  administration de l'infra
*/
class Entity_service_infra_admin extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_infra_admin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["ssoBdUrl"] != undefined) {
            obj["ssoBdUrl"] = obj["ssoBdUrl"].toString();
        }
        if (obj["infraBdUrl"] != undefined) {
            obj["infraBdUrl"] = obj["infraBdUrl"].toString();
        }
        if (obj["platformBdUrl"] != undefined) {
            obj["platformBdUrl"] = obj["platformBdUrl"].toString();
        }
        if (obj["service_nginxMultiConfiguratorId"] != undefined) {
            if (_.isString(obj["service_nginxMultiConfiguratorId"])) {
                obj["service_nginxMultiConfiguratorId"] = new utils_1.mongo.ObjectId(obj["service_nginxMultiConfiguratorId"]);
            }
            else if (obj["service_nginxMultiConfiguratorId"]._id) {
                obj["service_nginxMultiConfiguratorId"] = new utils_1.mongo.ObjectId(obj["service_nginxMultiConfiguratorId"]._id);
            }
        }
        if (obj["nginxApplicationSuffix"] != undefined) {
            obj["nginxApplicationSuffix"] = obj["nginxApplicationSuffix"].toString();
        }
    }
    static checkssoBdUrl(val, path = null) {
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
    static checkinfraBdUrl(val, path = null) {
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
    static checkplatformBdUrl(val, path = null) {
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
    static checkservice_nginxMultiConfiguratorId(val, path = null) {
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
    static checknginxApplicationSuffix(val, path = null) {
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
        if (isCompleteObj && (target.ssoBdUrl == null || target.ssoBdUrl == undefined)) {
            err.push(path + ".ssoBdUrl is required");
        }
        if (target.ssoBdUrl != null && target.ssoBdUrl != undefined) {
            res = Entity_service_infra_admin.checkssoBdUrl(target.ssoBdUrl, `${path}.ssoBdUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.infraBdUrl == null || target.infraBdUrl == undefined)) {
            err.push(path + ".infraBdUrl is required");
        }
        if (target.infraBdUrl != null && target.infraBdUrl != undefined) {
            res = Entity_service_infra_admin.checkinfraBdUrl(target.infraBdUrl, `${path}.infraBdUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.platformBdUrl != null && target.platformBdUrl != undefined) {
            res = Entity_service_infra_admin.checkplatformBdUrl(target.platformBdUrl, `${path}.platformBdUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.service_nginxMultiConfiguratorId == null || target.service_nginxMultiConfiguratorId == undefined)) {
            err.push(path + ".service_nginxMultiConfiguratorId is required");
        }
        if (target.service_nginxMultiConfiguratorId != null && target.service_nginxMultiConfiguratorId != undefined) {
            res = Entity_service_infra_admin.checkservice_nginxMultiConfiguratorId(target.service_nginxMultiConfiguratorId, `${path}.service_nginxMultiConfiguratorId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.nginxApplicationSuffix != null && target.nginxApplicationSuffix != undefined) {
            res = Entity_service_infra_admin.checknginxApplicationSuffix(target.nginxApplicationSuffix, `${path}.nginxApplicationSuffix`);
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
            case 'ssoBdUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'infraBdUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'platformBdUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'service_nginxMultiConfiguratorId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'nginxApplicationSuffix':
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
            case 'ssoBdUrl':
                return null;
            case 'infraBdUrl':
                return null;
            case 'platformBdUrl':
                return null;
            case 'service_nginxMultiConfiguratorId':
                return 'service_nginxMultiConfigurator';
            case 'nginxApplicationSuffix':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_infra_admin = Entity_service_infra_admin;
