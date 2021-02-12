"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_comptoireOr = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
const service_1 = require("./service");
/**
  service_comptoireOr
*/
class Entity_service_comptoireOr extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_comptoireOr' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["bddApiUrl"] != undefined) {
            obj["bddApiUrl"] = obj["bddApiUrl"].toString();
        }
        if (obj["ssoApiUrl"] != undefined) {
            obj["ssoApiUrl"] = obj["ssoApiUrl"].toString();
        }
        if (obj["licenceApiUrl"] != undefined) {
            obj["licenceApiUrl"] = obj["licenceApiUrl"].toString();
        }
        if (obj["infraBddUrl"] != undefined) {
            obj["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["adminConfId"] != undefined) {
            if (_.isString(obj["adminConfId"])) {
                obj["adminConfId"] = new utils_1.mongo.ObjectId(obj["adminConfId"]);
            }
            else if (obj["adminConfId"]._id) {
                obj["adminConfId"] = new utils_1.mongo.ObjectId(obj["adminConfId"]._id);
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
        if (obj["adminLicenceStoreId"] != undefined) {
            obj["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString();
        }
        if (obj["adminAppId"] != undefined) {
            if (_.isString(obj["adminAppId"])) {
                obj["adminAppId"] = new utils_1.mongo.ObjectId(obj["adminAppId"]);
            }
            else if (obj["adminAppId"]._id) {
                obj["adminAppId"] = new utils_1.mongo.ObjectId(obj["adminAppId"]._id);
            }
        }
        if (obj["sendgridApiUrl"] != undefined) {
            obj["sendgridApiUrl"] = obj["sendgridApiUrl"].toString();
        }
        if (obj["senderName"] != undefined) {
            obj["senderName"] = obj["senderName"].toString();
        }
        if (obj["senderEmail"] != undefined) {
            obj["senderEmail"] = obj["senderEmail"].toString();
        }
        if (obj["transactionEmailTemplate"] != undefined) {
            if (_.isString(obj["transactionEmailTemplate"])) {
                obj["transactionEmailTemplate"] = new utils_1.mongo.ObjectId(obj["transactionEmailTemplate"]);
            }
            else if (obj["transactionEmailTemplate"]._id) {
                obj["transactionEmailTemplate"] = new utils_1.mongo.ObjectId(obj["transactionEmailTemplate"]._id);
            }
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
    static checkssoApiUrl(val, path = null) {
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
    static checklicenceApiUrl(val, path = null) {
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
    static checkinfraBddUrl(val, path = null) {
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
    static checkadminConfId(val, path = null) {
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
    static checkadminLicenceStoreId(val, path = null) {
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
    static checkadminAppId(val, path = null) {
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
    static checksendgridApiUrl(val, path = null) {
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
    static checksenderName(val, path = null) {
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
    static checksenderEmail(val, path = null) {
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
    static checktransactionEmailTemplate(val, path = null) {
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
        if (target.bddApiUrl != null && target.bddApiUrl != undefined) {
            res = Entity_service_comptoireOr.checkbddApiUrl(target.bddApiUrl, `${path}.bddApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.ssoApiUrl != null && target.ssoApiUrl != undefined) {
            res = Entity_service_comptoireOr.checkssoApiUrl(target.ssoApiUrl, `${path}.ssoApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.licenceApiUrl != null && target.licenceApiUrl != undefined) {
            res = Entity_service_comptoireOr.checklicenceApiUrl(target.licenceApiUrl, `${path}.licenceApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.infraBddUrl != null && target.infraBddUrl != undefined) {
            res = Entity_service_comptoireOr.checkinfraBddUrl(target.infraBddUrl, `${path}.infraBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.adminConfId != null && target.adminConfId != undefined) {
            res = Entity_service_comptoireOr.checkadminConfId(target.adminConfId, `${path}.adminConfId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.end_client != null && target.end_client != undefined) {
            res = Entity_service_comptoireOr.checkend_client(target.end_client, `${path}.end_client`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.adminLicenceStoreId != null && target.adminLicenceStoreId != undefined) {
            res = Entity_service_comptoireOr.checkadminLicenceStoreId(target.adminLicenceStoreId, `${path}.adminLicenceStoreId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.adminAppId != null && target.adminAppId != undefined) {
            res = Entity_service_comptoireOr.checkadminAppId(target.adminAppId, `${path}.adminAppId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sendgridApiUrl != null && target.sendgridApiUrl != undefined) {
            res = Entity_service_comptoireOr.checksendgridApiUrl(target.sendgridApiUrl, `${path}.sendgridApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.senderName != null && target.senderName != undefined) {
            res = Entity_service_comptoireOr.checksenderName(target.senderName, `${path}.senderName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.senderEmail != null && target.senderEmail != undefined) {
            res = Entity_service_comptoireOr.checksenderEmail(target.senderEmail, `${path}.senderEmail`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.transactionEmailTemplate != null && target.transactionEmailTemplate != undefined) {
            res = Entity_service_comptoireOr.checktransactionEmailTemplate(target.transactionEmailTemplate, `${path}.transactionEmailTemplate`);
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
            case 'ssoApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'licenceApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'infraBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'adminConfId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'end_client':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'adminLicenceStoreId':
                //string
                return new String(value).valueOf();
                break;
            case 'adminAppId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'sendgridApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'senderName':
                //string
                return new String(value).valueOf();
                break;
            case 'senderEmail':
                //string
                return new String(value).valueOf();
                break;
            case 'transactionEmailTemplate':
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
            case 'bddApiUrl':
                return null;
            case 'ssoApiUrl':
                return null;
            case 'licenceApiUrl':
                return null;
            case 'infraBddUrl':
                return null;
            case 'adminConfId':
                return 'application_configuration_comptoire_or_admin';
            case 'end_client':
                return 'end_client';
            case 'adminLicenceStoreId':
                return null;
            case 'adminAppId':
                return 'application_instance';
            case 'sendgridApiUrl':
                return null;
            case 'senderName':
                return null;
            case 'senderEmail':
                return null;
            case 'transactionEmailTemplate':
                return 'MultilangSendGridTemplate';
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_comptoireOr = Entity_service_comptoireOr;
