"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_boisdor_service = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
const service_1 = require("./service");
/**
  service métier de boisdor
*/
class Entity_boisdor_service extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'boisdor_service' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["boisdorBddUrl"] != undefined) {
            obj["boisdorBddUrl"] = obj["boisdorBddUrl"].toString();
        }
        if (obj["ssoApiUrl"] != undefined) {
            obj["ssoApiUrl"] = obj["ssoApiUrl"].toString();
        }
        if (obj["licenceApiUrl"] != undefined) {
            obj["licenceApiUrl"] = obj["licenceApiUrl"].toString();
        }
        if (obj["sendgridApiUrl"] != undefined) {
            obj["sendgridApiUrl"] = obj["sendgridApiUrl"].toString();
        }
        if (obj["appId"] != undefined) {
            if (_.isString(obj["appId"])) {
                obj["appId"] = new utils_1.mongo.ObjectId(obj["appId"]);
            }
            else if (obj["appId"]._id) {
                obj["appId"] = new utils_1.mongo.ObjectId(obj["appId"]._id);
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
        if (obj["licenceStoreId"] != undefined) {
            obj["licenceStoreId"] = obj["licenceStoreId"].toString();
        }
        if (obj["ssoBddUrl"] != undefined) {
            obj["ssoBddUrl"] = obj["ssoBddUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            obj["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            obj["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["sellerAppId"] != undefined) {
            if (_.isString(obj["sellerAppId"])) {
                obj["sellerAppId"] = new utils_1.mongo.ObjectId(obj["sellerAppId"]);
            }
            else if (obj["sellerAppId"]._id) {
                obj["sellerAppId"] = new utils_1.mongo.ObjectId(obj["sellerAppId"]._id);
            }
        }
        if (obj["sellerLicenceStoreId"] != undefined) {
            obj["sellerLicenceStoreId"] = obj["sellerLicenceStoreId"].toString();
        }
        if (obj["adminAppId"] != undefined) {
            if (_.isString(obj["adminAppId"])) {
                obj["adminAppId"] = new utils_1.mongo.ObjectId(obj["adminAppId"]);
            }
            else if (obj["adminAppId"]._id) {
                obj["adminAppId"] = new utils_1.mongo.ObjectId(obj["adminAppId"]._id);
            }
        }
        if (obj["adminLicenceStoreId"] != undefined) {
            obj["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString();
        }
        if (obj["infraBddUrl"] != undefined) {
            obj["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["sellerSso_Client_template"] != undefined) {
            obj["sellerSso_Client_template"] = obj["sellerSso_Client_template"].toString();
        }
        if (obj["sellerEndClientTemplate"] != undefined) {
            if (_.isString(obj["sellerEndClientTemplate"])) {
                obj["sellerEndClientTemplate"] = new utils_1.mongo.ObjectId(obj["sellerEndClientTemplate"]);
            }
            else if (obj["sellerEndClientTemplate"]._id) {
                obj["sellerEndClientTemplate"] = new utils_1.mongo.ObjectId(obj["sellerEndClientTemplate"]._id);
            }
        }
        if (obj["sellerAppInstanceTemplate"] != undefined) {
            if (_.isString(obj["sellerAppInstanceTemplate"])) {
                obj["sellerAppInstanceTemplate"] = new utils_1.mongo.ObjectId(obj["sellerAppInstanceTemplate"]);
            }
            else if (obj["sellerAppInstanceTemplate"]._id) {
                obj["sellerAppInstanceTemplate"] = new utils_1.mongo.ObjectId(obj["sellerAppInstanceTemplate"]._id);
            }
        }
        if (obj["resetPasswordRedirect"] != undefined) {
            obj["resetPasswordRedirect"] = obj["resetPasswordRedirect"].toString();
        }
        if (obj["sendgrid_conf"] != undefined) {
            Index.Entity_bois_dor_mailer.cast(obj["sendgrid_conf"]);
            //6232018012fb75d8d565c96f
        }
    }
    static checkboisdorBddUrl(val, path = null) {
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
    static checkappId(val, path = null) {
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
    static checklicenceStoreId(val, path = null) {
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
    static checkssoBddUrl(val, path = null) {
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
    static checkclient_id(val, path = null) {
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
    static checkclient_secret(val, path = null) {
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
    static checksellerAppId(val, path = null) {
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
    static checksellerLicenceStoreId(val, path = null) {
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
    static checksellerSso_Client_template(val, path = null) {
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
    static checksellerEndClientTemplate(val, path = null) {
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
    static checksellerAppInstanceTemplate(val, path = null) {
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
    static checkresetPasswordRedirect(val, path = null) {
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
    static checksendgrid_conf(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_bois_dor_mailer.check(val, false, path);
            //6232018012fb75d8d565c96f
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (target.boisdorBddUrl != null && target.boisdorBddUrl != undefined) {
            res = Entity_boisdor_service.checkboisdorBddUrl(target.boisdorBddUrl, `${path}.boisdorBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.ssoApiUrl != null && target.ssoApiUrl != undefined) {
            res = Entity_boisdor_service.checkssoApiUrl(target.ssoApiUrl, `${path}.ssoApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.licenceApiUrl != null && target.licenceApiUrl != undefined) {
            res = Entity_boisdor_service.checklicenceApiUrl(target.licenceApiUrl, `${path}.licenceApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sendgridApiUrl != null && target.sendgridApiUrl != undefined) {
            res = Entity_boisdor_service.checksendgridApiUrl(target.sendgridApiUrl, `${path}.sendgridApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.appId != null && target.appId != undefined) {
            res = Entity_boisdor_service.checkappId(target.appId, `${path}.appId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.end_client != null && target.end_client != undefined) {
            res = Entity_boisdor_service.checkend_client(target.end_client, `${path}.end_client`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.licenceStoreId != null && target.licenceStoreId != undefined) {
            res = Entity_boisdor_service.checklicenceStoreId(target.licenceStoreId, `${path}.licenceStoreId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.ssoBddUrl != null && target.ssoBddUrl != undefined) {
            res = Entity_boisdor_service.checkssoBddUrl(target.ssoBddUrl, `${path}.ssoBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.client_id != null && target.client_id != undefined) {
            res = Entity_boisdor_service.checkclient_id(target.client_id, `${path}.client_id`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.client_secret != null && target.client_secret != undefined) {
            res = Entity_boisdor_service.checkclient_secret(target.client_secret, `${path}.client_secret`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.sellerAppId == null || target.sellerAppId == undefined)) {
            err.push(path + ".sellerAppId is required");
        }
        if (target.sellerAppId != null && target.sellerAppId != undefined) {
            res = Entity_boisdor_service.checksellerAppId(target.sellerAppId, `${path}.sellerAppId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sellerLicenceStoreId != null && target.sellerLicenceStoreId != undefined) {
            res = Entity_boisdor_service.checksellerLicenceStoreId(target.sellerLicenceStoreId, `${path}.sellerLicenceStoreId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.adminAppId != null && target.adminAppId != undefined) {
            res = Entity_boisdor_service.checkadminAppId(target.adminAppId, `${path}.adminAppId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.adminLicenceStoreId != null && target.adminLicenceStoreId != undefined) {
            res = Entity_boisdor_service.checkadminLicenceStoreId(target.adminLicenceStoreId, `${path}.adminLicenceStoreId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.infraBddUrl != null && target.infraBddUrl != undefined) {
            res = Entity_boisdor_service.checkinfraBddUrl(target.infraBddUrl, `${path}.infraBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sellerSso_Client_template != null && target.sellerSso_Client_template != undefined) {
            res = Entity_boisdor_service.checksellerSso_Client_template(target.sellerSso_Client_template, `${path}.sellerSso_Client_template`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sellerEndClientTemplate != null && target.sellerEndClientTemplate != undefined) {
            res = Entity_boisdor_service.checksellerEndClientTemplate(target.sellerEndClientTemplate, `${path}.sellerEndClientTemplate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sellerAppInstanceTemplate != null && target.sellerAppInstanceTemplate != undefined) {
            res = Entity_boisdor_service.checksellerAppInstanceTemplate(target.sellerAppInstanceTemplate, `${path}.sellerAppInstanceTemplate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.resetPasswordRedirect != null && target.resetPasswordRedirect != undefined) {
            res = Entity_boisdor_service.checkresetPasswordRedirect(target.resetPasswordRedirect, `${path}.resetPasswordRedirect`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sendgrid_conf != null && target.sendgrid_conf != undefined) {
            res = Entity_boisdor_service.checksendgrid_conf(target.sendgrid_conf, `${path}.sendgrid_conf`);
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
            case 'boisdorBddUrl':
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
            case 'sendgridApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'appId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'end_client':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'licenceStoreId':
                //string
                return new String(value).valueOf();
                break;
            case 'ssoBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'client_id':
                //string
                return new String(value).valueOf();
                break;
            case 'client_secret':
                //string
                return new String(value).valueOf();
                break;
            case 'sellerAppId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'sellerLicenceStoreId':
                //string
                return new String(value).valueOf();
                break;
            case 'adminAppId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'adminLicenceStoreId':
                //string
                return new String(value).valueOf();
                break;
            case 'infraBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'sellerSso_Client_template':
                //string
                return new String(value).valueOf();
                break;
            case 'sellerEndClientTemplate':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'sellerAppInstanceTemplate':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'resetPasswordRedirect':
                //string
                return new String(value).valueOf();
                break;
            case 'sendgrid_conf':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_bois_dor_mailer.castQueryParam(subPath, value);
                }
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
            case 'boisdorBddUrl':
                return null;
            case 'ssoApiUrl':
                return null;
            case 'licenceApiUrl':
                return null;
            case 'sendgridApiUrl':
                return null;
            case 'appId':
                return 'application_instance';
            case 'end_client':
                return 'end_client';
            case 'licenceStoreId':
                return null;
            case 'ssoBddUrl':
                return null;
            case 'client_id':
                return null;
            case 'client_secret':
                return null;
            case 'sellerAppId':
                return 'application_instance';
            case 'sellerLicenceStoreId':
                return null;
            case 'adminAppId':
                return 'application_instance';
            case 'adminLicenceStoreId':
                return null;
            case 'infraBddUrl':
                return null;
            case 'sellerSso_Client_template':
                return null;
            case 'sellerEndClientTemplate':
                return 'end_client';
            case 'sellerAppInstanceTemplate':
                return 'application_instance';
            case 'resetPasswordRedirect':
                return null;
            case 'sendgrid_conf':
                return Index.Entity_bois_dor_mailer.getClassNameOfProp(subPath);
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_boisdor_service = Entity_boisdor_service;
