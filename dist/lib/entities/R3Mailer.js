"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_R3Mailer = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  configurationpour l'envoie d emails R3
*/
class Entity_R3Mailer extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'R3Mailer' && [].indexOf(obj._class) !== -1) {
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
        if (obj["r3BaseUrl"] != undefined) {
            obj["r3BaseUrl"] = obj["r3BaseUrl"].toString();
        }
        if (obj["r3SendgridApiUrl"] != undefined) {
            obj["r3SendgridApiUrl"] = obj["r3SendgridApiUrl"].toString();
        }
        if (obj["r3ContactMail"] != undefined) {
            obj["r3ContactMail"] = obj["r3ContactMail"].toString();
        }
        if (obj["r3_group_resset_password"] != undefined) {
            if (_.isString(obj["r3_group_resset_password"])) {
                obj["r3_group_resset_password"] = new utils_1.mongo.ObjectId(obj["r3_group_resset_password"]);
            }
            else if (obj["r3_group_resset_password"]._id) {
                obj["r3_group_resset_password"] = new utils_1.mongo.ObjectId(obj["r3_group_resset_password"]._id);
            }
        }
        if (obj["r3_group_welcome"] != undefined) {
            if (_.isString(obj["r3_group_welcome"])) {
                obj["r3_group_welcome"] = new utils_1.mongo.ObjectId(obj["r3_group_welcome"]);
            }
            else if (obj["r3_group_welcome"]._id) {
                obj["r3_group_welcome"] = new utils_1.mongo.ObjectId(obj["r3_group_welcome"]._id);
            }
        }
        if (obj["r3_contact_to_user"] != undefined) {
            if (_.isString(obj["r3_contact_to_user"])) {
                obj["r3_contact_to_user"] = new utils_1.mongo.ObjectId(obj["r3_contact_to_user"]);
            }
            else if (obj["r3_contact_to_user"]._id) {
                obj["r3_contact_to_user"] = new utils_1.mongo.ObjectId(obj["r3_contact_to_user"]._id);
            }
        }
        if (obj["r3_contact_to_r3"] != undefined) {
            if (_.isString(obj["r3_contact_to_r3"])) {
                obj["r3_contact_to_r3"] = new utils_1.mongo.ObjectId(obj["r3_contact_to_r3"]);
            }
            else if (obj["r3_contact_to_r3"]._id) {
                obj["r3_contact_to_r3"] = new utils_1.mongo.ObjectId(obj["r3_contact_to_r3"]._id);
            }
        }
        if (obj["R3_prescriptor_invitation"] != undefined) {
            if (_.isString(obj["R3_prescriptor_invitation"])) {
                obj["R3_prescriptor_invitation"] = new utils_1.mongo.ObjectId(obj["R3_prescriptor_invitation"]);
            }
            else if (obj["R3_prescriptor_invitation"]._id) {
                obj["R3_prescriptor_invitation"] = new utils_1.mongo.ObjectId(obj["R3_prescriptor_invitation"]._id);
            }
        }
        if (obj["R3_analisys_end_to_r3_and_partner"] != undefined) {
            if (_.isString(obj["R3_analisys_end_to_r3_and_partner"])) {
                obj["R3_analisys_end_to_r3_and_partner"] = new utils_1.mongo.ObjectId(obj["R3_analisys_end_to_r3_and_partner"]);
            }
            else if (obj["R3_analisys_end_to_r3_and_partner"]._id) {
                obj["R3_analisys_end_to_r3_and_partner"] = new utils_1.mongo.ObjectId(obj["R3_analisys_end_to_r3_and_partner"]._id);
            }
        }
        if (obj["R3_analisys_end_to_user"] != undefined) {
            if (_.isString(obj["R3_analisys_end_to_user"])) {
                obj["R3_analisys_end_to_user"] = new utils_1.mongo.ObjectId(obj["R3_analisys_end_to_user"]);
            }
            else if (obj["R3_analisys_end_to_user"]._id) {
                obj["R3_analisys_end_to_user"] = new utils_1.mongo.ObjectId(obj["R3_analisys_end_to_user"]._id);
            }
        }
        if (obj["R3_partner_admin_created"] != undefined) {
            if (_.isString(obj["R3_partner_admin_created"])) {
                obj["R3_partner_admin_created"] = new utils_1.mongo.ObjectId(obj["R3_partner_admin_created"]);
            }
            else if (obj["R3_partner_admin_created"]._id) {
                obj["R3_partner_admin_created"] = new utils_1.mongo.ObjectId(obj["R3_partner_admin_created"]._id);
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
    static checkr3BaseUrl(val, path = null) {
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
    static checkr3SendgridApiUrl(val, path = null) {
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
    static checkr3ContactMail(val, path = null) {
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
    static checkr3_group_resset_password(val, path = null) {
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
    static checkr3_group_welcome(val, path = null) {
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
    static checkr3_contact_to_user(val, path = null) {
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
    static checkr3_contact_to_r3(val, path = null) {
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
    static checkR3_prescriptor_invitation(val, path = null) {
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
    static checkR3_analisys_end_to_r3_and_partner(val, path = null) {
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
    static checkR3_analisys_end_to_user(val, path = null) {
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
    static checkR3_partner_admin_created(val, path = null) {
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
            res = Entity_R3Mailer.checksenderEMail(target.senderEMail, `${path}.senderEMail`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.senderName != null && target.senderName != undefined) {
            res = Entity_R3Mailer.checksenderName(target.senderName, `${path}.senderName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.r3BaseUrl != null && target.r3BaseUrl != undefined) {
            res = Entity_R3Mailer.checkr3BaseUrl(target.r3BaseUrl, `${path}.r3BaseUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.r3SendgridApiUrl != null && target.r3SendgridApiUrl != undefined) {
            res = Entity_R3Mailer.checkr3SendgridApiUrl(target.r3SendgridApiUrl, `${path}.r3SendgridApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.r3ContactMail != null && target.r3ContactMail != undefined) {
            res = Entity_R3Mailer.checkr3ContactMail(target.r3ContactMail, `${path}.r3ContactMail`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.r3_group_resset_password != null && target.r3_group_resset_password != undefined) {
            res = Entity_R3Mailer.checkr3_group_resset_password(target.r3_group_resset_password, `${path}.r3_group_resset_password`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.r3_group_welcome != null && target.r3_group_welcome != undefined) {
            res = Entity_R3Mailer.checkr3_group_welcome(target.r3_group_welcome, `${path}.r3_group_welcome`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.r3_contact_to_user != null && target.r3_contact_to_user != undefined) {
            res = Entity_R3Mailer.checkr3_contact_to_user(target.r3_contact_to_user, `${path}.r3_contact_to_user`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.r3_contact_to_r3 != null && target.r3_contact_to_r3 != undefined) {
            res = Entity_R3Mailer.checkr3_contact_to_r3(target.r3_contact_to_r3, `${path}.r3_contact_to_r3`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.R3_prescriptor_invitation != null && target.R3_prescriptor_invitation != undefined) {
            res = Entity_R3Mailer.checkR3_prescriptor_invitation(target.R3_prescriptor_invitation, `${path}.R3_prescriptor_invitation`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.R3_analisys_end_to_r3_and_partner != null && target.R3_analisys_end_to_r3_and_partner != undefined) {
            res = Entity_R3Mailer.checkR3_analisys_end_to_r3_and_partner(target.R3_analisys_end_to_r3_and_partner, `${path}.R3_analisys_end_to_r3_and_partner`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.R3_analisys_end_to_user != null && target.R3_analisys_end_to_user != undefined) {
            res = Entity_R3Mailer.checkR3_analisys_end_to_user(target.R3_analisys_end_to_user, `${path}.R3_analisys_end_to_user`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.R3_partner_admin_created != null && target.R3_partner_admin_created != undefined) {
            res = Entity_R3Mailer.checkR3_partner_admin_created(target.R3_partner_admin_created, `${path}.R3_partner_admin_created`);
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
            case 'r3BaseUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'r3SendgridApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'r3ContactMail':
                //string
                return new String(value).valueOf();
                break;
            case 'r3_group_resset_password':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'r3_group_welcome':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'r3_contact_to_user':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'r3_contact_to_r3':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'R3_prescriptor_invitation':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'R3_analisys_end_to_r3_and_partner':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'R3_analisys_end_to_user':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'R3_partner_admin_created':
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
            case 'r3BaseUrl':
                return null;
            case 'r3SendgridApiUrl':
                return null;
            case 'r3ContactMail':
                return null;
            case 'r3_group_resset_password':
                return 'MultilangSendGridTemplate';
            case 'r3_group_welcome':
                return 'MultilangSendGridTemplate';
            case 'r3_contact_to_user':
                return 'MultilangSendGridTemplate';
            case 'r3_contact_to_r3':
                return 'MultilangSendGridTemplate';
            case 'R3_prescriptor_invitation':
                return 'MultilangSendGridTemplate';
            case 'R3_analisys_end_to_r3_and_partner':
                return 'MultilangSendGridTemplate';
            case 'R3_analisys_end_to_user':
                return 'MultilangSendGridTemplate';
            case 'R3_partner_admin_created':
                return 'MultilangSendGridTemplate';
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_R3Mailer = Entity_R3Mailer;
