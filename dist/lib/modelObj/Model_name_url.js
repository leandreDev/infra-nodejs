"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  c'est une paire nom url
*/
class Model_name_url extends utils_1.Base {
    /**
      c'est une paire nom url
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "name_url";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["url"] != undefined) {
            this["url"] = obj["url"].toString();
        }
        if (obj["refId"] != undefined) {
            this["refId"] = obj["refId"].toString();
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
            if (isCompleteObj && (target["url"] == null || target["url"] == undefined)) {
                throw new Error(path + "url is required");
            }
            if (target["url"] != null && target["url"] != undefined) {
                let _url = target["url"];
                if (!_.isString(_url)) {
                    throw new Error(path + "url is not a string");
                }
            }
            if (target["refId"] != null && target["refId"] != undefined) {
                let _refId = target["refId"];
                if (!_.isString(_refId)) {
                    throw new Error(path + "refId is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_name_url.check(target, true, path).then(() => {
            return new Model_name_url(target);
        });
    }
}
exports.Model_name_url = Model_name_url;
//# sourceMappingURL=Model_name_url.js.map