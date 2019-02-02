"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["userUrl"] == null || target["userUrl"] == undefined)) {
                throw new Error(path + "userUrl is required");
            }
            if (target["userUrl"] != null && target["userUrl"] != undefined) {
                let _userUrl = target["userUrl"];
                if (!_.isString(_userUrl)) {
                    throw new Error(path + "userUrl is not a string");
                }
            }
            if (isCompleteObj && (target["mailResetUrl"] == null || target["mailResetUrl"] == undefined)) {
                throw new Error(path + "mailResetUrl is required");
            }
            if (target["mailResetUrl"] != null && target["mailResetUrl"] != undefined) {
                let _mailResetUrl = target["mailResetUrl"];
                if (!_.isString(_mailResetUrl)) {
                    throw new Error(path + "mailResetUrl is not a string");
                }
            }
            if (isCompleteObj && (target["mailInfoUrl"] == null || target["mailInfoUrl"] == undefined)) {
                throw new Error(path + "mailInfoUrl is required");
            }
            if (target["mailInfoUrl"] != null && target["mailInfoUrl"] != undefined) {
                let _mailInfoUrl = target["mailInfoUrl"];
                if (!_.isString(_mailInfoUrl)) {
                    throw new Error(path + "mailInfoUrl is not a string");
                }
            }
            if (isCompleteObj && (target["mailAccountCreatedUrl"] == null || target["mailAccountCreatedUrl"] == undefined)) {
                throw new Error(path + "mailAccountCreatedUrl is required");
            }
            if (target["mailAccountCreatedUrl"] != null && target["mailAccountCreatedUrl"] != undefined) {
                let _mailAccountCreatedUrl = target["mailAccountCreatedUrl"];
                if (!_.isString(_mailAccountCreatedUrl)) {
                    throw new Error(path + "mailAccountCreatedUrl is not a string");
                }
            }
            if (isCompleteObj && (target["durationResetDay"] == null || target["durationResetDay"] == undefined)) {
                throw new Error(path + "durationResetDay is required");
            }
            if (target["durationResetDay"] != null && target["durationResetDay"] != undefined) {
                let _durationResetDay = target["durationResetDay"];
                if (!_.isNumber(_durationResetDay)) {
                    throw new Error(path + "durationResetDay is not a number");
                }
                if (_durationResetDay % 1 > 0) {
                    throw new Error(path + "durationResetDay must be have a step of 1");
                }
            }
            if (isCompleteObj && (target["userAppUrl"] == null || target["userAppUrl"] == undefined)) {
                throw new Error(path + "userAppUrl is required");
            }
            if (target["userAppUrl"] != null && target["userAppUrl"] != undefined) {
                let _userAppUrl = target["userAppUrl"];
                if (!_.isString(_userAppUrl)) {
                    throw new Error(path + "userAppUrl is not a string");
                }
            }
            if (isCompleteObj && (target["userProfileUrl"] == null || target["userProfileUrl"] == undefined)) {
                throw new Error(path + "userProfileUrl is required");
            }
            if (target["userProfileUrl"] != null && target["userProfileUrl"] != undefined) {
                let _userProfileUrl = target["userProfileUrl"];
                if (!_.isString(_userProfileUrl)) {
                    throw new Error(path + "userProfileUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_signin.check(target, true, path).then(() => {
            return new Model_service_signin(target);
        });
    }
}
exports.Model_service_signin = Model_service_signin;
//# sourceMappingURL=Model_service_signin.js.map