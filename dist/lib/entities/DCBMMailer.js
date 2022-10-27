"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_DCBMMailer = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  configuration pour l'envoie d emails DCBM
*/
class Entity_DCBMMailer extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'DCBMMailer' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["senderEMail"] != undefined) {
            obj["senderEMail"] = obj["senderEMail"].toString();
        }
        if (obj["senderName"] != undefined) {
            obj["senderName"] = obj["senderName"].toString();
        }
        if (obj["dcbmBaseUrl"] != undefined) {
            obj["dcbmBaseUrl"] = obj["dcbmBaseUrl"].toString();
        }
        if (obj["dcbmSendgridApiUrl"] != undefined) {
            obj["dcbmSendgridApiUrl"] = obj["dcbmSendgridApiUrl"].toString();
        }
        if (obj["dcbmContactMail"] != undefined) {
            obj["dcbmContactMail"] = obj["dcbmContactMail"].toString();
        }
        if (obj["dcbm_group_resset_password"] != undefined) {
            if (_.isString(obj["dcbm_group_resset_password"])) {
                obj["dcbm_group_resset_password"] = new utils_1.mongo.ObjectId(obj["dcbm_group_resset_password"]);
            }
            else if (obj["dcbm_group_resset_password"]._id) {
                obj["dcbm_group_resset_password"] = new utils_1.mongo.ObjectId(obj["dcbm_group_resset_password"]._id);
            }
        }
        if (obj["dcbm_group_welcome"] != undefined) {
            if (_.isString(obj["dcbm_group_welcome"])) {
                obj["dcbm_group_welcome"] = new utils_1.mongo.ObjectId(obj["dcbm_group_welcome"]);
            }
            else if (obj["dcbm_group_welcome"]._id) {
                obj["dcbm_group_welcome"] = new utils_1.mongo.ObjectId(obj["dcbm_group_welcome"]._id);
            }
        }
        if (obj["dcbm_contact_to_user"] != undefined) {
            if (_.isString(obj["dcbm_contact_to_user"])) {
                obj["dcbm_contact_to_user"] = new utils_1.mongo.ObjectId(obj["dcbm_contact_to_user"]);
            }
            else if (obj["dcbm_contact_to_user"]._id) {
                obj["dcbm_contact_to_user"] = new utils_1.mongo.ObjectId(obj["dcbm_contact_to_user"]._id);
            }
        }
        if (obj["dcbm_contact_to_dcbm"] != undefined) {
            if (_.isString(obj["dcbm_contact_to_dcbm"])) {
                obj["dcbm_contact_to_dcbm"] = new utils_1.mongo.ObjectId(obj["dcbm_contact_to_dcbm"]);
            }
            else if (obj["dcbm_contact_to_dcbm"]._id) {
                obj["dcbm_contact_to_dcbm"] = new utils_1.mongo.ObjectId(obj["dcbm_contact_to_dcbm"]._id);
            }
        }
        if (obj["dcbm_group_welcome_admin_templateId"] != undefined) {
            if (_.isString(obj["dcbm_group_welcome_admin_templateId"])) {
                obj["dcbm_group_welcome_admin_templateId"] = new utils_1.mongo.ObjectId(obj["dcbm_group_welcome_admin_templateId"]);
            }
            else if (obj["dcbm_group_welcome_admin_templateId"]._id) {
                obj["dcbm_group_welcome_admin_templateId"] = new utils_1.mongo.ObjectId(obj["dcbm_group_welcome_admin_templateId"]._id);
            }
        }
    }
    static checksenderEMail(val, path = null) {
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
    static checkdcbmBaseUrl(val, path = null) {
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
    static checkdcbmSendgridApiUrl(val, path = null) {
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
    static checkdcbmContactMail(val, path = null) {
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
    static checkdcbm_group_resset_password(val, path = null) {
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
    static checkdcbm_group_welcome(val, path = null) {
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
    static checkdcbm_contact_to_user(val, path = null) {
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
    static checkdcbm_contact_to_dcbm(val, path = null) {
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
    static checkdcbm_group_welcome_admin_templateId(val, path = null) {
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
        if (target.senderEMail != null && target.senderEMail != undefined) {
            res = Entity_DCBMMailer.checksenderEMail(target.senderEMail, `${path}.senderEMail`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.senderName != null && target.senderName != undefined) {
            res = Entity_DCBMMailer.checksenderName(target.senderName, `${path}.senderName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dcbmBaseUrl != null && target.dcbmBaseUrl != undefined) {
            res = Entity_DCBMMailer.checkdcbmBaseUrl(target.dcbmBaseUrl, `${path}.dcbmBaseUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dcbmSendgridApiUrl != null && target.dcbmSendgridApiUrl != undefined) {
            res = Entity_DCBMMailer.checkdcbmSendgridApiUrl(target.dcbmSendgridApiUrl, `${path}.dcbmSendgridApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dcbmContactMail != null && target.dcbmContactMail != undefined) {
            res = Entity_DCBMMailer.checkdcbmContactMail(target.dcbmContactMail, `${path}.dcbmContactMail`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dcbm_group_resset_password != null && target.dcbm_group_resset_password != undefined) {
            res = Entity_DCBMMailer.checkdcbm_group_resset_password(target.dcbm_group_resset_password, `${path}.dcbm_group_resset_password`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dcbm_group_welcome != null && target.dcbm_group_welcome != undefined) {
            res = Entity_DCBMMailer.checkdcbm_group_welcome(target.dcbm_group_welcome, `${path}.dcbm_group_welcome`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dcbm_contact_to_user != null && target.dcbm_contact_to_user != undefined) {
            res = Entity_DCBMMailer.checkdcbm_contact_to_user(target.dcbm_contact_to_user, `${path}.dcbm_contact_to_user`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dcbm_contact_to_dcbm != null && target.dcbm_contact_to_dcbm != undefined) {
            res = Entity_DCBMMailer.checkdcbm_contact_to_dcbm(target.dcbm_contact_to_dcbm, `${path}.dcbm_contact_to_dcbm`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.dcbm_group_welcome_admin_templateId == null || target.dcbm_group_welcome_admin_templateId == undefined)) {
            err.push(path + ".dcbm_group_welcome_admin_templateId is required");
        }
        if (target.dcbm_group_welcome_admin_templateId != null && target.dcbm_group_welcome_admin_templateId != undefined) {
            res = Entity_DCBMMailer.checkdcbm_group_welcome_admin_templateId(target.dcbm_group_welcome_admin_templateId, `${path}.dcbm_group_welcome_admin_templateId`);
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
            case 'senderEMail':
                //string
                return new String(value).valueOf();
                break;
            case 'senderName':
                //string
                return new String(value).valueOf();
                break;
            case 'dcbmBaseUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'dcbmSendgridApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'dcbmContactMail':
                //string
                return new String(value).valueOf();
                break;
            case 'dcbm_group_resset_password':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'dcbm_group_welcome':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'dcbm_contact_to_user':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'dcbm_contact_to_dcbm':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'dcbm_group_welcome_admin_templateId':
                //objectid
                return new utils_1.mongo.ObjectId(value);
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
            case 'senderEMail':
                return null;
            case 'senderName':
                return null;
            case 'dcbmBaseUrl':
                return null;
            case 'dcbmSendgridApiUrl':
                return null;
            case 'dcbmContactMail':
                return null;
            case 'dcbm_group_resset_password':
                return 'MultilangSendGridTemplate';
            case 'dcbm_group_welcome':
                return 'MultilangSendGridTemplate';
            case 'dcbm_contact_to_user':
                return 'MultilangSendGridTemplate';
            case 'dcbm_contact_to_dcbm':
                return 'MultilangSendGridTemplate';
            case 'dcbm_group_welcome_admin_templateId':
                return 'MultilangSendGridTemplate';
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_DCBMMailer = Entity_DCBMMailer;
