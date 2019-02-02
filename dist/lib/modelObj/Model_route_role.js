"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  paire route et role
*/
class Model_route_role extends utils_1.Base {
    /**
      paire route et role
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "route_role";
        if (obj["route"] != undefined) {
            this["route"] = obj["route"].toString();
        }
        if (obj["role"] != undefined && obj["role"] != null && _.isArray(obj["role"])) {
            this["role"] = obj["role"].map((value) => {
                return value.toString();
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["route"] != null && target["route"] != undefined) {
                let _route = target["route"];
                if (!_.isString(_route)) {
                    throw new Error(path + "route is not a string");
                }
            }
            if (target["role"] != null && target["role"] != undefined) {
                target["role"].forEach((_role, index) => {
                    if (!_.isString(_role)) {
                        throw new Error(path + "role index: " + index + "is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_route_role.check(target, true, path).then(() => {
            return new Model_route_role(target);
        });
    }
}
exports.Model_route_role = Model_route_role;
//# sourceMappingURL=Model_route_role.js.map