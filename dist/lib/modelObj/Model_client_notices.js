"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  notices for client
*/
class Model_client_notices extends utils_1.Base {
    /**
      notices for client
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "client_notices";
        if (obj["values"] != undefined && obj["values"] != null && _.isArray(obj["values"])) {
            this["values"] = obj["values"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["notice_field"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["values"] != null && target["values"] != undefined) {
                target["values"].forEach((_values, index) => {
                    promArr.push(Index["notice_field"].check(_values, isCompleteObj, path + "values.")
                        .catch((err) => {
                        throw new Error(path + "values index: " + index + "is not notice_field");
                    }));
                    if (_values._class != null && _values._class != undefined) {
                        promArr.push(Index[_values._class].check(_values, isCompleteObj, path + "values.")
                            .catch((err) => {
                            throw new Error(path + "values index: " + index + "is not a " + _values._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_client_notices.check(target, true, path).then(() => {
            return new Model_client_notices(target);
        });
    }
}
exports.Model_client_notices = Model_client_notices;
//# sourceMappingURL=Model_client_notices.js.map