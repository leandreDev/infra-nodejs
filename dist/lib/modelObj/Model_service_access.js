"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  décrit les régles de paramètre des servies
*/
class Model_service_access extends utils_1.Base {
    /**
      décrit les régles de paramètre des servies
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_access";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["service"] != undefined) {
            if (_.isString(obj["service"])) {
                this["service"] = obj["service"];
            }
            else if (obj["service"]._id) {
                this["service"] = obj["service"]._id;
            }
        }
        if (obj["httAccess"] != undefined) {
            if (obj._class) {
                this["httAccess"] = new Index[obj._class](obj["httAccess"]);
            }
            else {
                this["httAccess"] = new Index["url_role"](obj["httAccess"]);
            }
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
            if (target["service"] != null && target["service"] != undefined) {
                let _service = target["service"];
                if (!_.isString(_service)) {
                    throw new Error(path + "service is not a string");
                }
            }
            if (target["httAccess"] != null && target["httAccess"] != undefined) {
                let _httAccess = target["httAccess"];
                promArr.push(Index["url_role"].check(_httAccess, isCompleteObj, path + "httAccess.")
                    .catch((err) => {
                    throw new Error(path + "httAccess is not ");
                }));
                if (_httAccess._class != null && _httAccess._class != undefined) {
                    promArr.push(Index[_httAccess._class].check(_httAccess, isCompleteObj, path + "httAccess.")
                        .catch((err) => {
                        throw new Error(path + "httAccess is not a " + _httAccess._class);
                    }));
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_access.check(target, true, path).then(() => {
            return new Model_service_access(target);
        });
    }
}
exports.Model_service_access = Model_service_access;
//# sourceMappingURL=Model_service_access.js.map