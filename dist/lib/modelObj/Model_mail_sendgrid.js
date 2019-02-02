"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_mail_1 = require("./Model_mail");
/**
  objet envoyé a l'api sendgrid
*/
class Model_mail_sendgrid extends Model_mail_1.Model_mail {
    /**
      objet envoyé a l'api sendgrid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mail_sendgrid";
        if (obj["content"] != undefined) {
            this["content"] = obj["content"].toString();
        }
        if (obj["from"] != undefined) {
            this["from"] = obj["from"].toString();
        }
        if (obj["personalizations"] != undefined) {
            this["personalizations"] = obj["personalizations"].toString();
        }
        if (obj["reply_to"] != undefined) {
            this["reply_to"] = obj["reply_to"].toString();
        }
        if (obj["subject"] != undefined) {
            this["subject"] = obj["subject"].toString();
        }
        if (obj["send_at"] != undefined) {
            this["send_at"] = new Date(obj["send_at"]);
        }
        if (obj["template_id"] != undefined) {
            this["template_id"] = obj["template_id"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["content"] != null && target["content"] != undefined) {
                let _content = target["content"];
                if (!_.isString(_content)) {
                    throw new Error(path + "content is not a string");
                }
            }
            if (target["from"] != null && target["from"] != undefined) {
                let _from = target["from"];
                if (!_.isString(_from)) {
                    throw new Error(path + "from is not a string");
                }
            }
            if (target["personalizations"] != null && target["personalizations"] != undefined) {
                let _personalizations = target["personalizations"];
                if (!_.isString(_personalizations)) {
                    throw new Error(path + "personalizations is not a string");
                }
            }
            if (target["reply_to"] != null && target["reply_to"] != undefined) {
                let _reply_to = target["reply_to"];
                if (!_.isString(_reply_to)) {
                    throw new Error(path + "reply_to is not a string");
                }
            }
            if (target["subject"] != null && target["subject"] != undefined) {
                let _subject = target["subject"];
                if (!_.isString(_subject)) {
                    throw new Error(path + "subject is not a string");
                }
            }
            if (target["send_at"] != null && target["send_at"] != undefined) {
                let _send_at = target["send_at"];
                if (!_.isDate(_send_at)) {
                    throw new Error(path + "send_at is not a Date");
                }
            }
            if (target["template_id"] != null && target["template_id"] != undefined) {
                let _template_id = target["template_id"];
                if (!_.isString(_template_id)) {
                    throw new Error(path + "template_id is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_mail_sendgrid.check(target, true, path).then(() => {
            return new Model_mail_sendgrid(target);
        });
    }
}
exports.Model_mail_sendgrid = Model_mail_sendgrid;
//# sourceMappingURL=Model_mail_sendgrid.js.map