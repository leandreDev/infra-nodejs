"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  notice field
*/
class Model_notice_field extends utils_1.Base {
    /**
      notice field
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "notice_field";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["content"] != undefined) {
            this["content"] = obj["content"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["content"] != null && target["content"] != undefined) {
                let _content = target["content"];
                if (!_.isString(_content)) {
                    throw new Error(path + "content is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_notice_field.check(target, true, path).then(() => {
            return new Model_notice_field(target);
        });
    }
}
exports.Model_notice_field = Model_notice_field;
//# sourceMappingURL=Model_notice_field.js.map