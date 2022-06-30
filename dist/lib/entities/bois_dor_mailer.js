"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_bois_dor_mailer = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  liste de tous les templates de mail pour bois d'or
*/
class Entity_bois_dor_mailer extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'bois_dor_mailer' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["comptoirOr_info"] != undefined) {
            if (_.isString(obj["comptoirOr_info"])) {
                obj["comptoirOr_info"] = new utils_1.mongo.ObjectId(obj["comptoirOr_info"]);
            }
            else if (obj["comptoirOr_info"]._id) {
                obj["comptoirOr_info"] = new utils_1.mongo.ObjectId(obj["comptoirOr_info"]._id);
            }
        }
        if (obj["boisdor_fr_orderDelivred"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderDelivred"])) {
                obj["boisdor_fr_orderDelivred"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderDelivred"]);
            }
            else if (obj["boisdor_fr_orderDelivred"]._id) {
                obj["boisdor_fr_orderDelivred"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderDelivred"]._id);
            }
        }
        if (obj["boisdor_fr_orderRegister"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderRegister"])) {
                obj["boisdor_fr_orderRegister"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderRegister"]);
            }
            else if (obj["boisdor_fr_orderRegister"]._id) {
                obj["boisdor_fr_orderRegister"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderRegister"]._id);
            }
        }
        if (obj["boisdor_fr_resetPassword"] != undefined) {
            if (_.isString(obj["boisdor_fr_resetPassword"])) {
                obj["boisdor_fr_resetPassword"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_resetPassword"]);
            }
            else if (obj["boisdor_fr_resetPassword"]._id) {
                obj["boisdor_fr_resetPassword"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_resetPassword"]._id);
            }
        }
        if (obj["boisdor_fr_accountCreated"] != undefined) {
            if (_.isString(obj["boisdor_fr_accountCreated"])) {
                obj["boisdor_fr_accountCreated"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_accountCreated"]);
            }
            else if (obj["boisdor_fr_accountCreated"]._id) {
                obj["boisdor_fr_accountCreated"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_accountCreated"]._id);
            }
        }
        if (obj["boisdor_fr_orderRefund"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderRefund"])) {
                obj["boisdor_fr_orderRefund"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderRefund"]);
            }
            else if (obj["boisdor_fr_orderRefund"]._id) {
                obj["boisdor_fr_orderRefund"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderRefund"]._id);
            }
        }
        if (obj["boisdor_fr_orderCancelled"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderCancelled"])) {
                obj["boisdor_fr_orderCancelled"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderCancelled"]);
            }
            else if (obj["boisdor_fr_orderCancelled"]._id) {
                obj["boisdor_fr_orderCancelled"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderCancelled"]._id);
            }
        }
        if (obj["boisdor_fr_orderValidatedForDelivery"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderValidatedForDelivery"])) {
                obj["boisdor_fr_orderValidatedForDelivery"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderValidatedForDelivery"]);
            }
            else if (obj["boisdor_fr_orderValidatedForDelivery"]._id) {
                obj["boisdor_fr_orderValidatedForDelivery"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderValidatedForDelivery"]._id);
            }
        }
        if (obj["boisdor_fr_orderValidatedForPickup"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderValidatedForPickup"])) {
                obj["boisdor_fr_orderValidatedForPickup"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderValidatedForPickup"]);
            }
            else if (obj["boisdor_fr_orderValidatedForPickup"]._id) {
                obj["boisdor_fr_orderValidatedForPickup"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderValidatedForPickup"]._id);
            }
        }
        if (obj["boisdor_fr_orderToCustomer"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderToCustomer"])) {
                obj["boisdor_fr_orderToCustomer"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderToCustomer"]);
            }
            else if (obj["boisdor_fr_orderToCustomer"]._id) {
                obj["boisdor_fr_orderToCustomer"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderToCustomer"]._id);
            }
        }
        if (obj["boisdor_fr_orderToSeller"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderToSeller"])) {
                obj["boisdor_fr_orderToSeller"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderToSeller"]);
            }
            else if (obj["boisdor_fr_orderToSeller"]._id) {
                obj["boisdor_fr_orderToSeller"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderToSeller"]._id);
            }
        }
        if (obj["boisdor_fr_sav"] != undefined) {
            if (_.isString(obj["boisdor_fr_sav"])) {
                obj["boisdor_fr_sav"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_sav"]);
            }
            else if (obj["boisdor_fr_sav"]._id) {
                obj["boisdor_fr_sav"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_sav"]._id);
            }
        }
        if (obj["boisdor_fr_contact"] != undefined) {
            if (_.isString(obj["boisdor_fr_contact"])) {
                obj["boisdor_fr_contact"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_contact"]);
            }
            else if (obj["boisdor_fr_contact"]._id) {
                obj["boisdor_fr_contact"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_contact"]._id);
            }
        }
        if (obj["boisdor_fr_reply_sav"] != undefined) {
            if (_.isString(obj["boisdor_fr_reply_sav"])) {
                obj["boisdor_fr_reply_sav"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_reply_sav"]);
            }
            else if (obj["boisdor_fr_reply_sav"]._id) {
                obj["boisdor_fr_reply_sav"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_reply_sav"]._id);
            }
        }
        if (obj["boisdor_fr_reply_contact"] != undefined) {
            if (_.isString(obj["boisdor_fr_reply_contact"])) {
                obj["boisdor_fr_reply_contact"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_reply_contact"]);
            }
            else if (obj["boisdor_fr_reply_contact"]._id) {
                obj["boisdor_fr_reply_contact"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_reply_contact"]._id);
            }
        }
        if (obj["boisdor_fr_orderToCustomerPending"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderToCustomerPending"])) {
                obj["boisdor_fr_orderToCustomerPending"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderToCustomerPending"]);
            }
            else if (obj["boisdor_fr_orderToCustomerPending"]._id) {
                obj["boisdor_fr_orderToCustomerPending"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderToCustomerPending"]._id);
            }
        }
        if (obj["boisdor_fr_orderToCustomerDiff"] != undefined) {
            if (_.isString(obj["boisdor_fr_orderToCustomerDiff"])) {
                obj["boisdor_fr_orderToCustomerDiff"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderToCustomerDiff"]);
            }
            else if (obj["boisdor_fr_orderToCustomerDiff"]._id) {
                obj["boisdor_fr_orderToCustomerDiff"] = new utils_1.mongo.ObjectId(obj["boisdor_fr_orderToCustomerDiff"]._id);
            }
        }
    }
    static checkcomptoirOr_info(val, path = null) {
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
    static checkboisdor_fr_orderDelivred(val, path = null) {
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
    static checkboisdor_fr_orderRegister(val, path = null) {
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
    static checkboisdor_fr_resetPassword(val, path = null) {
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
    static checkboisdor_fr_accountCreated(val, path = null) {
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
    static checkboisdor_fr_orderRefund(val, path = null) {
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
    static checkboisdor_fr_orderCancelled(val, path = null) {
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
    static checkboisdor_fr_orderValidatedForDelivery(val, path = null) {
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
    static checkboisdor_fr_orderValidatedForPickup(val, path = null) {
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
    static checkboisdor_fr_orderToCustomer(val, path = null) {
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
    static checkboisdor_fr_orderToSeller(val, path = null) {
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
    static checkboisdor_fr_sav(val, path = null) {
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
    static checkboisdor_fr_contact(val, path = null) {
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
    static checkboisdor_fr_reply_sav(val, path = null) {
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
    static checkboisdor_fr_reply_contact(val, path = null) {
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
    static checkboisdor_fr_orderToCustomerPending(val, path = null) {
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
    static checkboisdor_fr_orderToCustomerDiff(val, path = null) {
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
        if (target.comptoirOr_info != null && target.comptoirOr_info != undefined) {
            res = Entity_bois_dor_mailer.checkcomptoirOr_info(target.comptoirOr_info, `${path}.comptoirOr_info`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderDelivred != null && target.boisdor_fr_orderDelivred != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderDelivred(target.boisdor_fr_orderDelivred, `${path}.boisdor_fr_orderDelivred`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderRegister != null && target.boisdor_fr_orderRegister != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderRegister(target.boisdor_fr_orderRegister, `${path}.boisdor_fr_orderRegister`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_resetPassword != null && target.boisdor_fr_resetPassword != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_resetPassword(target.boisdor_fr_resetPassword, `${path}.boisdor_fr_resetPassword`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_accountCreated != null && target.boisdor_fr_accountCreated != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_accountCreated(target.boisdor_fr_accountCreated, `${path}.boisdor_fr_accountCreated`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderRefund != null && target.boisdor_fr_orderRefund != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderRefund(target.boisdor_fr_orderRefund, `${path}.boisdor_fr_orderRefund`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderCancelled != null && target.boisdor_fr_orderCancelled != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderCancelled(target.boisdor_fr_orderCancelled, `${path}.boisdor_fr_orderCancelled`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderValidatedForDelivery != null && target.boisdor_fr_orderValidatedForDelivery != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderValidatedForDelivery(target.boisdor_fr_orderValidatedForDelivery, `${path}.boisdor_fr_orderValidatedForDelivery`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderValidatedForPickup != null && target.boisdor_fr_orderValidatedForPickup != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderValidatedForPickup(target.boisdor_fr_orderValidatedForPickup, `${path}.boisdor_fr_orderValidatedForPickup`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderToCustomer != null && target.boisdor_fr_orderToCustomer != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderToCustomer(target.boisdor_fr_orderToCustomer, `${path}.boisdor_fr_orderToCustomer`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderToSeller != null && target.boisdor_fr_orderToSeller != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderToSeller(target.boisdor_fr_orderToSeller, `${path}.boisdor_fr_orderToSeller`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_sav != null && target.boisdor_fr_sav != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_sav(target.boisdor_fr_sav, `${path}.boisdor_fr_sav`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_contact != null && target.boisdor_fr_contact != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_contact(target.boisdor_fr_contact, `${path}.boisdor_fr_contact`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_reply_sav != null && target.boisdor_fr_reply_sav != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_reply_sav(target.boisdor_fr_reply_sav, `${path}.boisdor_fr_reply_sav`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_reply_contact != null && target.boisdor_fr_reply_contact != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_reply_contact(target.boisdor_fr_reply_contact, `${path}.boisdor_fr_reply_contact`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderToCustomerPending != null && target.boisdor_fr_orderToCustomerPending != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderToCustomerPending(target.boisdor_fr_orderToCustomerPending, `${path}.boisdor_fr_orderToCustomerPending`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdor_fr_orderToCustomerDiff != null && target.boisdor_fr_orderToCustomerDiff != undefined) {
            res = Entity_bois_dor_mailer.checkboisdor_fr_orderToCustomerDiff(target.boisdor_fr_orderToCustomerDiff, `${path}.boisdor_fr_orderToCustomerDiff`);
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
            case 'comptoirOr_info':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderDelivred':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderRegister':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_resetPassword':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_accountCreated':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderRefund':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderCancelled':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderValidatedForDelivery':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderValidatedForPickup':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderToCustomer':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderToSeller':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_sav':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_contact':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_reply_sav':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_reply_contact':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderToCustomerPending':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'boisdor_fr_orderToCustomerDiff':
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
            case 'comptoirOr_info':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderDelivred':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderRegister':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_resetPassword':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_accountCreated':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderRefund':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderCancelled':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderValidatedForDelivery':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderValidatedForPickup':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderToCustomer':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderToSeller':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_sav':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_contact':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_reply_sav':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_reply_contact':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderToCustomerPending':
                return 'MultilangSendGridTemplate';
            case 'boisdor_fr_orderToCustomerDiff':
                return 'MultilangSendGridTemplate';
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_bois_dor_mailer = Entity_bois_dor_mailer;
