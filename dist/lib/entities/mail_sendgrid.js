"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_mail_sendgrid = void 0;
const _ = require("lodash");
const Index = require("./Index");
const mail_1 = require("./mail");
/**
  objet envoyé a l'api sendgrid
*/
class Entity_mail_sendgrid extends mail_1.Entity_mail {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'mail_sendgrid' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        mail_1.Entity_mail.cast(obj, true);
        if (obj["content"] != undefined) {
            obj["content"] = obj["content"].toString();
        }
        if (obj["from"] != undefined) {
            obj["from"] = obj["from"].toString();
        }
        if (obj["personalizations"] != undefined) {
            obj["personalizations"] = obj["personalizations"].toString();
        }
        if (obj["reply_to"] != undefined) {
            obj["reply_to"] = obj["reply_to"].toString();
        }
        if (obj["subject"] != undefined) {
            obj["subject"] = obj["subject"].toString();
        }
        if (obj["send_at"] != undefined) {
            obj["send_at"] = new Date(obj["send_at"]);
        }
        if (obj["template_id"] != undefined) {
            obj["template_id"] = obj["template_id"].toString();
        }
    }
    static checkcontent(val, path = null) {
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
    static checkfrom(val, path = null) {
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
    static checkpersonalizations(val, path = null) {
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
    static checkreply_to(val, path = null) {
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
    static checksubject(val, path = null) {
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
    static checksend_at(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isDate(val)) {
            res.push(`${path}  is not a Date`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checktemplate_id(val, path = null) {
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
        err = mail_1.Entity_mail.check(target, isCompleteObj, path);
        if (target.content != null && target.content != undefined) {
            res = Entity_mail_sendgrid.checkcontent(target.content, `${path}.content`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.from != null && target.from != undefined) {
            res = Entity_mail_sendgrid.checkfrom(target.from, `${path}.from`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.personalizations != null && target.personalizations != undefined) {
            res = Entity_mail_sendgrid.checkpersonalizations(target.personalizations, `${path}.personalizations`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.reply_to != null && target.reply_to != undefined) {
            res = Entity_mail_sendgrid.checkreply_to(target.reply_to, `${path}.reply_to`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.subject != null && target.subject != undefined) {
            res = Entity_mail_sendgrid.checksubject(target.subject, `${path}.subject`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.send_at != null && target.send_at != undefined) {
            res = Entity_mail_sendgrid.checksend_at(target.send_at, `${path}.send_at`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.template_id != null && target.template_id != undefined) {
            res = Entity_mail_sendgrid.checktemplate_id(target.template_id, `${path}.template_id`);
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
            case 'content':
                //string
                return new String(value).valueOf();
                break;
            case 'from':
                //string
                return new String(value).valueOf();
                break;
            case 'personalizations':
                //string
                return new String(value).valueOf();
                break;
            case 'reply_to':
                //string
                return new String(value).valueOf();
                break;
            case 'subject':
                //string
                return new String(value).valueOf();
                break;
            case 'send_at':
                //date
                return new Date(value);
                break;
            case 'template_id':
                //string
                return new String(value).valueOf();
                break;
            default:
                return mail_1.Entity_mail.castQueryParam(key, value);
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
            case 'content':
                return null;
            case 'from':
                return null;
            case 'personalizations':
                return null;
            case 'reply_to':
                return null;
            case 'subject':
                return null;
            case 'send_at':
                return null;
            case 'template_id':
                return null;
            default:
                return mail_1.Entity_mail.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_mail_sendgrid = Entity_mail_sendgrid;
//# sourceMappingURL=mail_sendgrid.js.map