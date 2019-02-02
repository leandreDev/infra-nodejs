"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  description d'une requete avec request
*/
class Model_Request extends utils_1.Base {
    /**
      description d'une requete avec request
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "Request";
        /**
   fully qualified uri or a parsed url object from url.parse()
  */
        this["url"] = "https://";
        /**
  http method (default: "GET")
  */
        this["method"] = "GET";
        if (obj["url"] != undefined) {
            this["url"] = obj["url"].toString();
        }
        if (obj["method"] != undefined) {
            this["method"] = obj["method"].toString();
        }
        if (obj["headers"] != undefined && obj["headers"] != null && _.isArray(obj["headers"])) {
            this["headers"] = obj["headers"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
        if (obj["body"] != undefined) {
            this["body"] = obj["body"];
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["url"] == null || target["url"] == undefined)) {
                throw new Error(path + "url is required");
            }
            if (target["url"] != null && target["url"] != undefined) {
                let _url = target["url"];
                if (!_.isString(_url)) {
                    throw new Error(path + "url is not a string");
                }
            }
            if (isCompleteObj && (target["method"] == null || target["method"] == undefined)) {
                throw new Error(path + "method is required");
            }
            if (target["method"] != null && target["method"] != undefined) {
                let _method = target["method"];
                if (!_.isString(_method)) {
                    throw new Error(path + "method is not a string");
                }
                let _enum_method = ["GET", "POST", "PUT", "PATCH", "DELETE"];
                if (_enum_method.indexOf(_method) == -1) {
                    throw new Error(path + "method dont match one of GET , POST , PUT , PATCH , DELETE");
                }
            }
            if (target["headers"] != null && target["headers"] != undefined) {
                target["headers"].forEach((_headers, index) => {
                    promArr.push(Index["name_value"].check(_headers, isCompleteObj, path + "headers.")
                        .catch((err) => {
                        throw new Error(path + "headers index: " + index + "is not name_value");
                    }));
                    if (_headers._class != null && _headers._class != undefined) {
                        promArr.push(Index[_headers._class].check(_headers, isCompleteObj, path + "headers.")
                            .catch((err) => {
                            throw new Error(path + "headers index: " + index + "is not a " + _headers._class);
                        }));
                    }
                });
            }
            if (target["body"] != null && target["body"] != undefined) {
                // public "body":Iobject;
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_Request.check(target, true, path).then(() => {
            return new Model_Request(target);
        });
    }
}
exports.Model_Request = Model_Request;
//# sourceMappingURL=Model_Request.js.map