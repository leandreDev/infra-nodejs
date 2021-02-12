"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_signin = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
const service_1 = require("./service");
/**
  service d'enregistrement
*/
class Entity_service_signin extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_signin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["userUrl"] != undefined) {
            obj["userUrl"] = obj["userUrl"].toString();
        }
        if (obj["mailResetUrl"] != undefined) {
            obj["mailResetUrl"] = obj["mailResetUrl"].toString();
        }
        if (obj["mailInfoUrl"] != undefined) {
            obj["mailInfoUrl"] = obj["mailInfoUrl"].toString();
        }
        if (obj["mailAccountCreatedUrl"] != undefined) {
            obj["mailAccountCreatedUrl"] = obj["mailAccountCreatedUrl"].toString();
        }
        if (obj["durationResetDay"] != undefined) {
            obj["durationResetDay"] = new Number(obj["durationResetDay"]).valueOf();
        }
        if (obj["userAppUrl"] != undefined) {
            obj["userAppUrl"] = obj["userAppUrl"].toString();
        }
        if (obj["userProfileUrl"] != undefined) {
            obj["userProfileUrl"] = obj["userProfileUrl"].toString();
        }
        if (obj["bddSsoUrl"] != undefined) {
            obj["bddSsoUrl"] = obj["bddSsoUrl"].toString();
        }
        if (obj["mailerUrl"] != undefined) {
            obj["mailerUrl"] = obj["mailerUrl"].toString();
        }
        if (obj["mailerName"] != undefined) {
            obj["mailerName"] = obj["mailerName"].toString();
        }
        if (obj["mailerMail"] != undefined) {
            obj["mailerMail"] = obj["mailerMail"].toString();
        }
        if (obj["resetMail"] != undefined) {
            if (_.isString(obj["resetMail"])) {
                obj["resetMail"] = new utils_1.mongo.ObjectId(obj["resetMail"]);
            }
            else if (obj["resetMail"]._id) {
                obj["resetMail"] = new utils_1.mongo.ObjectId(obj["resetMail"]._id);
            }
        }
        if (obj["updateMail"] != undefined) {
            if (_.isString(obj["updateMail"])) {
                obj["updateMail"] = new utils_1.mongo.ObjectId(obj["updateMail"]);
            }
            else if (obj["updateMail"]._id) {
                obj["updateMail"] = new utils_1.mongo.ObjectId(obj["updateMail"]._id);
            }
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
    static checkmailResetUrl(val, path = null) {
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
    static checkmailInfoUrl(val, path = null) {
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
    static checkmailAccountCreatedUrl(val, path = null) {
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
    static checkdurationResetDay(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (val % 1 !== 0) {
            res.push(`${path} must be % 1`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkuserAppUrl(val, path = null) {
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
    static checkuserProfileUrl(val, path = null) {
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
    static checkbddSsoUrl(val, path = null) {
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
    static checkmailerUrl(val, path = null) {
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
    static checkmailerName(val, path = null) {
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
    static checkmailerMail(val, path = null) {
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
    static checkresetMail(val, path = null) {
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
    static checkupdateMail(val, path = null) {
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
        if (isCompleteObj && (target.userUrl == null || target.userUrl == undefined)) {
            err.push(path + ".userUrl is required");
        }
        if (target.userUrl != null && target.userUrl != undefined) {
            res = Entity_service_signin.checkuserUrl(target.userUrl, `${path}.userUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.mailResetUrl == null || target.mailResetUrl == undefined)) {
            err.push(path + ".mailResetUrl is required");
        }
        if (target.mailResetUrl != null && target.mailResetUrl != undefined) {
            res = Entity_service_signin.checkmailResetUrl(target.mailResetUrl, `${path}.mailResetUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.mailInfoUrl == null || target.mailInfoUrl == undefined)) {
            err.push(path + ".mailInfoUrl is required");
        }
        if (target.mailInfoUrl != null && target.mailInfoUrl != undefined) {
            res = Entity_service_signin.checkmailInfoUrl(target.mailInfoUrl, `${path}.mailInfoUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.mailAccountCreatedUrl == null || target.mailAccountCreatedUrl == undefined)) {
            err.push(path + ".mailAccountCreatedUrl is required");
        }
        if (target.mailAccountCreatedUrl != null && target.mailAccountCreatedUrl != undefined) {
            res = Entity_service_signin.checkmailAccountCreatedUrl(target.mailAccountCreatedUrl, `${path}.mailAccountCreatedUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.durationResetDay == null || target.durationResetDay == undefined)) {
            err.push(path + ".durationResetDay is required");
        }
        if (target.durationResetDay != null && target.durationResetDay != undefined) {
            res = Entity_service_signin.checkdurationResetDay(target.durationResetDay, `${path}.durationResetDay`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.userAppUrl == null || target.userAppUrl == undefined)) {
            err.push(path + ".userAppUrl is required");
        }
        if (target.userAppUrl != null && target.userAppUrl != undefined) {
            res = Entity_service_signin.checkuserAppUrl(target.userAppUrl, `${path}.userAppUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.userProfileUrl == null || target.userProfileUrl == undefined)) {
            err.push(path + ".userProfileUrl is required");
        }
        if (target.userProfileUrl != null && target.userProfileUrl != undefined) {
            res = Entity_service_signin.checkuserProfileUrl(target.userProfileUrl, `${path}.userProfileUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.bddSsoUrl != null && target.bddSsoUrl != undefined) {
            res = Entity_service_signin.checkbddSsoUrl(target.bddSsoUrl, `${path}.bddSsoUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.mailerUrl != null && target.mailerUrl != undefined) {
            res = Entity_service_signin.checkmailerUrl(target.mailerUrl, `${path}.mailerUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.mailerName != null && target.mailerName != undefined) {
            res = Entity_service_signin.checkmailerName(target.mailerName, `${path}.mailerName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.mailerMail != null && target.mailerMail != undefined) {
            res = Entity_service_signin.checkmailerMail(target.mailerMail, `${path}.mailerMail`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.resetMail != null && target.resetMail != undefined) {
            res = Entity_service_signin.checkresetMail(target.resetMail, `${path}.resetMail`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.updateMail != null && target.updateMail != undefined) {
            res = Entity_service_signin.checkupdateMail(target.updateMail, `${path}.updateMail`);
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
            case 'userUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'mailResetUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'mailInfoUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'mailAccountCreatedUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'durationResetDay':
                //number
                return new Number(value).valueOf();
                break;
            case 'userAppUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'userProfileUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'bddSsoUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'mailerUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'mailerName':
                //string
                return new String(value).valueOf();
                break;
            case 'mailerMail':
                //string
                return new String(value).valueOf();
                break;
            case 'resetMail':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'updateMail':
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
            case 'userUrl':
                return null;
            case 'mailResetUrl':
                return null;
            case 'mailInfoUrl':
                return null;
            case 'mailAccountCreatedUrl':
                return null;
            case 'durationResetDay':
                return null;
            case 'userAppUrl':
                return null;
            case 'userProfileUrl':
                return null;
            case 'bddSsoUrl':
                return null;
            case 'mailerUrl':
                return null;
            case 'mailerName':
                return null;
            case 'mailerMail':
                return null;
            case 'resetMail':
                return 'MultilangSendGridTemplate';
            case 'updateMail':
                return 'MultilangSendGridTemplate';
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_signin = Entity_service_signin;
