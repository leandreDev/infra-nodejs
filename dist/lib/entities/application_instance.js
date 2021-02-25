"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_instance = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  c'est le couple application configuration
*/
class Entity_application_instance extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_instance' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["application"] != undefined) {
            if (_.isString(obj["application"])) {
                obj["application"] = new utils_1.mongo.ObjectId(obj["application"]);
            }
            else if (obj["application"]._id) {
                obj["application"] = new utils_1.mongo.ObjectId(obj["application"]._id);
            }
        }
        if (obj["configuration"] != undefined) {
            if (_.isString(obj["configuration"])) {
                obj["configuration"] = new utils_1.mongo.ObjectId(obj["configuration"]);
            }
            else if (obj["configuration"]._id) {
                obj["configuration"] = new utils_1.mongo.ObjectId(obj["configuration"]._id);
            }
        }
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                obj["end_client"] = new utils_1.mongo.ObjectId(obj["end_client"]);
            }
            else if (obj["end_client"]._id) {
                obj["end_client"] = new utils_1.mongo.ObjectId(obj["end_client"]._id);
            }
        }
        if (obj["oidc_client"] != undefined) {
            if (_.isString(obj["oidc_client"])) {
                obj["oidc_client"] = new utils_1.mongo.ObjectId(obj["oidc_client"]);
            }
            else if (obj["oidc_client"]._id) {
                obj["oidc_client"] = new utils_1.mongo.ObjectId(obj["oidc_client"]._id);
            }
        }
        if (obj["css"] != undefined) {
            obj["css"] = obj["css"].toString();
        }
        if (obj["public_data"] != undefined) {
            obj["public_data"] = obj["public_data"];
        }
        if (obj["port"] != undefined) {
            obj["port"] = new Number(obj["port"]).valueOf();
        }
    }
    static checkname(val, path = null) {
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
    static checkapplication(val, path = null) {
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
    static checkconfiguration(val, path = null) {
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
    static checkend_client(val, path = null) {
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
    static checkoidc_client(val, path = null) {
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
    static checkcss(val, path = null) {
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
    static checkpublic_data(val, path = null) {
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
    static checkport(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
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
        if (target.name != null && target.name != undefined) {
            res = Entity_application_instance.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.application != null && target.application != undefined) {
            res = Entity_application_instance.checkapplication(target.application, `${path}.application`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.configuration != null && target.configuration != undefined) {
            res = Entity_application_instance.checkconfiguration(target.configuration, `${path}.configuration`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.end_client == null || target.end_client == undefined)) {
            err.push(path + ".end_client is required");
        }
        if (target.end_client != null && target.end_client != undefined) {
            res = Entity_application_instance.checkend_client(target.end_client, `${path}.end_client`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.oidc_client == null || target.oidc_client == undefined)) {
            err.push(path + ".oidc_client is required");
        }
        if (target.oidc_client != null && target.oidc_client != undefined) {
            res = Entity_application_instance.checkoidc_client(target.oidc_client, `${path}.oidc_client`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.css != null && target.css != undefined) {
            res = Entity_application_instance.checkcss(target.css, `${path}.css`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.public_data != null && target.public_data != undefined) {
            res = Entity_application_instance.checkpublic_data(target.public_data, `${path}.public_data`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.port != null && target.port != undefined) {
            res = Entity_application_instance.checkport(target.port, `${path}.port`);
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
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'application':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'configuration':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'end_client':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'oidc_client':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'css':
                //texte
                return new String(value).valueOf();
                break;
            case 'public_data':
                //object
                return value;
                break;
            case 'port':
                //number
                return new Number(value).valueOf();
                break;
            default:
                return utils_1.Entity.castQueryParam(key, value);
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
            case 'name':
                return null;
            case 'application':
                return 'application';
            case 'configuration':
                return 'application_configuration';
            case 'end_client':
                return 'end_client';
            case 'oidc_client':
                return 'oidc_Client';
            case 'css':
                return null;
            case 'public_data':
                return null;
            case 'port':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_instance = Entity_application_instance;
