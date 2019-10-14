"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  service d'enregistrement
*/
class Model_service_signin extends Model_service_1.Model_service {
    /**
      service d'enregistrement
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_signin";
        if (obj["userUrl"] != undefined) {
            this["userUrl"] = obj["userUrl"].toString();
        }
        if (obj["mailResetUrl"] != undefined) {
            this["mailResetUrl"] = obj["mailResetUrl"].toString();
        }
        if (obj["mailInfoUrl"] != undefined) {
            this["mailInfoUrl"] = obj["mailInfoUrl"].toString();
        }
        if (obj["mailAccountCreatedUrl"] != undefined) {
            this["mailAccountCreatedUrl"] = obj["mailAccountCreatedUrl"].toString();
        }
        if (obj["durationResetDay"] != undefined) {
            this["durationResetDay"] = new Number(obj["durationResetDay"]).valueOf();
        }
        if (obj["userAppUrl"] != undefined) {
            this["userAppUrl"] = obj["userAppUrl"].toString();
        }
        if (obj["userProfileUrl"] != undefined) {
            this["userProfileUrl"] = obj["userProfileUrl"].toString();
        }
    }
}
exports.Model_service_signin = Model_service_signin;
//# sourceMappingURL=Model_service_signin.js.map