"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  certificat
*/
class Model_certificat extends utils_1.Base {
    /**
      certificat
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "certificat";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
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
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_certificat.check(target, true, path).then(() => {
            return new Model_certificat(target);
        });
    }
}
exports.Model_certificat = Model_certificat;
//# sourceMappingURL=Model_certificat.js.map