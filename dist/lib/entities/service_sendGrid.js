"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_sendGrid = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
const service_1 = require("./service");
/**
  permet d'envoyer des mail via l'api send grid v3
*/
class Entity_service_sendGrid extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_sendGrid' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["sendGridApiKey"] != undefined) {
            obj["sendGridApiKey"] = obj["sendGridApiKey"].toString();
        }
        if (obj["messageUrl"] != undefined) {
            obj["messageUrl"] = obj["messageUrl"].toString();
        }
        if (obj["userUrl"] != undefined) {
            obj["userUrl"] = obj["userUrl"].toString();
        }
        if (obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])) {
            obj["templates"] = obj["templates"].map((value) => {
                if (_.isString(value)) {
                    return new utils_1.mongo.ObjectId(value);
                }
                else if (value._id) {
                    return new utils_1.mongo.ObjectId(value._id);
                }
            });
        }
    }
    static checksendGridApiKey(val, path = null) {
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
    static checkmessageUrl(val, path = null) {
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
    static checkuserUrl(val, path = null) {
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
    static checktemplates(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.sendGridApiKey == null || target.sendGridApiKey == undefined)) {
            err.push(path + ".sendGridApiKey is required");
        }
        if (target.sendGridApiKey != null && target.sendGridApiKey != undefined) {
            res = Entity_service_sendGrid.checksendGridApiKey(target.sendGridApiKey, `${path}.sendGridApiKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.messageUrl == null || target.messageUrl == undefined)) {
            err.push(path + ".messageUrl is required");
        }
        if (target.messageUrl != null && target.messageUrl != undefined) {
            res = Entity_service_sendGrid.checkmessageUrl(target.messageUrl, `${path}.messageUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.userUrl == null || target.userUrl == undefined)) {
            err.push(path + ".userUrl is required");
        }
        if (target.userUrl != null && target.userUrl != undefined) {
            res = Entity_service_sendGrid.checkuserUrl(target.userUrl, `${path}.userUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.templates != null && target.templates != undefined) {
            target.templates.forEach((data, index) => {
                res = Entity_service_sendGrid.checktemplates(target.templates[index], `${path}.templates.${index}`);
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
            case 'sendGridApiKey':
                //string
                return new String(value).valueOf();
                break;
            case 'messageUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'userUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'templates':
                //objectid
                return new utils_1.mongo.ObjectId(value);
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
            case 'sendGridApiKey':
                return null;
            case 'messageUrl':
                return null;
            case 'userUrl':
                return null;
            case 'templates':
                return 'MultilangSendGridTemplate';
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_sendGrid = Entity_service_sendGrid;
