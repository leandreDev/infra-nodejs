"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  configuration d'une stratégie passport à déployer sur le sso
*/
class Model_passport_strategie extends utils_1.Base {
    /**
      configuration d'une stratégie passport à déployer sur le sso
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["autoCreate"] != undefined) {
            this["autoCreate"] = new Boolean(obj["autoCreate"]).valueOf();
        }
        if (obj["autoLoginWMail"] != undefined) {
            this["autoLoginWMail"] = new Boolean(obj["autoLoginWMail"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["autoCreate"] != null && target["autoCreate"] != undefined) {
                let _autoCreate = target["autoCreate"];
                if (!_.isBoolean(_autoCreate)) {
                    throw new Error(path + "autoCreate is not a boolean");
                }
            }
            if (target["autoLoginWMail"] != null && target["autoLoginWMail"] != undefined) {
                let _autoLoginWMail = target["autoLoginWMail"];
                if (!_.isBoolean(_autoLoginWMail)) {
                    throw new Error(path + "autoLoginWMail is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_passport_strategie.check(target, true, path).then(() => {
            return new Model_passport_strategie(target);
        });
    }
}
exports.Model_passport_strategie = Model_passport_strategie;
//# sourceMappingURL=Model_passport_strategie.js.map