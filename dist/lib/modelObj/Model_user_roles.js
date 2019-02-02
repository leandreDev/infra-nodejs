"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  paire utilisateurs role
*/
class Model_user_roles extends utils_1.Base {
    /**
      paire utilisateurs role
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "user_roles";
        if (obj["user"] != undefined) {
            if (_.isString(obj["user"])) {
                this["user"] = obj["user"];
            }
            else if (obj["user"]._id) {
                this["user"] = obj["user"]._id;
            }
        }
        if (obj["roles"] != undefined && obj["roles"] != null && _.isArray(obj["roles"])) {
            this["roles"] = obj["roles"].map((value) => {
                return value.toString();
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["user"] != null && target["user"] != undefined) {
                let _user = target["user"];
                if (!_.isString(_user)) {
                    throw new Error(path + "user is not a string");
                }
            }
            if (target["roles"] != null && target["roles"] != undefined) {
                target["roles"].forEach((_roles, index) => {
                    if (!_.isString(_roles)) {
                        throw new Error(path + "roles index: " + index + "is not a string");
                    }
                    let _enum_roles = ["client", "admin"];
                    if (_enum_roles.indexOf(_roles) == -1) {
                        throw new Error(path + "roles index: " + index + " dont match one of client , admin");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_user_roles.check(target, true, path).then(() => {
            return new Model_user_roles(target);
        });
    }
}
exports.Model_user_roles = Model_user_roles;
//# sourceMappingURL=Model_user_roles.js.map