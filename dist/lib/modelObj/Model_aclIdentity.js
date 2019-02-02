"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  description d'une identit   pour l'acl
*/
class Model_aclIdentity extends utils_1.Base {
    /**
      description d'une identit   pour l'acl
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "aclIdentity";
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                this["end_client"] = obj["end_client"];
            }
            else if (obj["end_client"]._id) {
                this["end_client"] = obj["end_client"]._id;
            }
        }
        if (obj["applicaton_instance"] != undefined) {
            if (_.isString(obj["applicaton_instance"])) {
                this["applicaton_instance"] = obj["applicaton_instance"];
            }
            else if (obj["applicaton_instance"]._id) {
                this["applicaton_instance"] = obj["applicaton_instance"]._id;
            }
        }
        if (obj["role"] != undefined) {
            this["role"] = obj["role"].toString();
        }
        if (obj["user"] != undefined) {
            if (_.isString(obj["user"])) {
                this["user"] = obj["user"];
            }
            else if (obj["user"]._id) {
                this["user"] = obj["user"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["end_client"] != null && target["end_client"] != undefined) {
                let _end_client = target["end_client"];
                if (!_.isString(_end_client)) {
                    throw new Error(path + "end_client is not a string");
                }
            }
            if (target["applicaton_instance"] != null && target["applicaton_instance"] != undefined) {
                let _applicaton_instance = target["applicaton_instance"];
                if (!_.isString(_applicaton_instance)) {
                    throw new Error(path + "applicaton_instance is not a string");
                }
            }
            if (target["role"] != null && target["role"] != undefined) {
                let _role = target["role"];
                if (!_.isString(_role)) {
                    throw new Error(path + "role is not a string");
                }
            }
            if (target["user"] != null && target["user"] != undefined) {
                let _user = target["user"];
                if (!_.isString(_user)) {
                    throw new Error(path + "user is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_aclIdentity.check(target, true, path).then(() => {
            return new Model_aclIdentity(target);
        });
    }
}
exports.Model_aclIdentity = Model_aclIdentity;
//# sourceMappingURL=Model_aclIdentity.js.map