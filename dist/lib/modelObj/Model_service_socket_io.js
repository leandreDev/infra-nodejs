"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service messagerie de soket.io
*/
class Model_service_socket_io extends Model_service_1.Model_service {
    /**
      service messagerie de soket.io
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_socket_io";
        if (obj["namespaces"] != undefined && obj["namespaces"] != null && _.isArray(obj["namespaces"])) {
            this["namespaces"] = obj["namespaces"].map((value) => {
                return value.toString();
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["namespaces"] != null && target["namespaces"] != undefined) {
                target["namespaces"].forEach((_namespaces, index) => {
                    if (!_.isString(_namespaces)) {
                        throw new Error(path + "namespaces index: " + index + "is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_socket_io.check(target, true, path).then(() => {
            return new Model_service_socket_io(target);
        });
    }
}
exports.Model_service_socket_io = Model_service_socket_io;
//# sourceMappingURL=Model_service_socket_io.js.map