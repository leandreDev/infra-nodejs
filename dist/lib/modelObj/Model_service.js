"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  identification du service
*/
class Model_service extends utils_1.Base {
    /**
      identification du service
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["urlBase"] != undefined) {
            this["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["port"] != undefined) {
            this["port"] = new Number(obj["port"]).valueOf();
        }
        if (obj["debug"] != undefined) {
            this["debug"] = new Boolean(obj["debug"]).valueOf();
        }
        if (obj["licence_well-known"] != undefined) {
            this["licence_well-known"] = obj["licence_well-known"].toString();
        }
        if (obj["secretKey"] != undefined) {
            this["secretKey"] = obj["secretKey"].toString();
        }
        if (obj["publicAccess"] != undefined) {
            if (obj._class) {
                this["publicAccess"] = new Index[obj._class](obj["publicAccess"]);
            }
            else {
                this["publicAccess"] = new Index["url_role"](obj["publicAccess"]);
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
            if (target["urlBase"] != null && target["urlBase"] != undefined) {
                let _urlBase = target["urlBase"];
                if (!_.isString(_urlBase)) {
                    throw new Error(path + "urlBase is not a string");
                }
            }
            if (target["port"] != null && target["port"] != undefined) {
                let _port = target["port"];
                if (!_.isNumber(_port)) {
                    throw new Error(path + "port is not a number");
                }
            }
            if (target["debug"] != null && target["debug"] != undefined) {
                let _debug = target["debug"];
                if (!_.isBoolean(_debug)) {
                    throw new Error(path + "debug is not a boolean");
                }
            }
            if (target["licence_well-known"] != null && target["licence_well-known"] != undefined) {
                let _licence_wellknown = target["licence_well-known"];
                if (!_.isString(_licence_wellknown)) {
                    throw new Error(path + "licence_well-known is not a string");
                }
            }
            if (target["secretKey"] != null && target["secretKey"] != undefined) {
                let _secretKey = target["secretKey"];
                if (!_.isString(_secretKey)) {
                    throw new Error(path + "secretKey is not a string");
                }
            }
            if (target["publicAccess"] != null && target["publicAccess"] != undefined) {
                let _publicAccess = target["publicAccess"];
                promArr.push(Index["url_role"].check(_publicAccess, isCompleteObj, path + "publicAccess.")
                    .catch((err) => {
                    throw new Error(path + "publicAccess is not ");
                }));
                if (_publicAccess._class != null && _publicAccess._class != undefined) {
                    promArr.push(Index[_publicAccess._class].check(_publicAccess, isCompleteObj, path + "publicAccess.")
                        .catch((err) => {
                        throw new Error(path + "publicAccess is not a " + _publicAccess._class);
                    }));
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service.check(target, true, path).then(() => {
            return new Model_service(target);
        });
    }
}
exports.Model_service = Model_service;
//# sourceMappingURL=Model_service.js.map