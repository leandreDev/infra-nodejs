"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  liste des applications
*/
class Model_application extends utils_1.Base {
    /**
      liste des applications
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["depot"] != undefined) {
            this["depot"] = obj["depot"].toString();
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
            if (target["description"] != null && target["description"] != undefined) {
                let _description = target["description"];
                if (!_.isString(_description)) {
                    throw new Error(path + "description is not a string");
                }
            }
            if (target["depot"] != null && target["depot"] != undefined) {
                let _depot = target["depot"];
                if (!_.isString(_depot)) {
                    throw new Error(path + "depot is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application.check(target, true, path).then(() => {
            return new Model_application(target);
        });
    }
}
exports.Model_application = Model_application;
//# sourceMappingURL=Model_application.js.map