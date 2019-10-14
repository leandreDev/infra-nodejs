"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.Model_mail_sendgrid = Model_mail_sendgrid;
//# sourceMappingURL=Model_mail_sendgrid.js.map