"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  template lodash + nom
*/
class Model_TemplateLodash extends utils_1.Base {
    /**
      template lodash + nom
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "TemplateLodash";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["template"] != undefined) {
            this["template"] = obj["template"].toString();
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
            if (isCompleteObj && (target["template"] == null || target["template"] == undefined)) {
                throw new Error(path + "template is required");
            }
            if (target["template"] != null && target["template"] != undefined) {
                let _template = target["template"];
                if (!_.isString(_template)) {
                    throw new Error(path + "template is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_TemplateLodash.check(target, true, path).then(() => {
            return new Model_TemplateLodash(target);
        });
    }
}
exports.Model_TemplateLodash = Model_TemplateLodash;
//# sourceMappingURL=Model_TemplateLodash.js.map