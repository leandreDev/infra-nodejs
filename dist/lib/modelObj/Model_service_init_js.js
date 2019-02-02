"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service qui retourne un init.js
*/
class Model_service_init_js extends Model_service_1.Model_service {
    /**
      service qui retourne un init.js
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_init_js";
        if (obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])) {
            this["templates"] = obj["templates"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["TemplateLodash"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["templates"] == null || target["templates"] == undefined)) {
                throw new Error(path + "templates is required");
            }
            if (target["templates"] != null && target["templates"] != undefined) {
                target["templates"].forEach((_templates, index) => {
                    promArr.push(Index["TemplateLodash"].check(_templates, isCompleteObj, path + "templates.")
                        .catch((err) => {
                        throw new Error(path + "templates index: " + index + "is not TemplateLodash");
                    }));
                    if (_templates._class != null && _templates._class != undefined) {
                        promArr.push(Index[_templates._class].check(_templates, isCompleteObj, path + "templates.")
                            .catch((err) => {
                            throw new Error(path + "templates index: " + index + "is not a " + _templates._class);
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
        return Model_service_init_js.check(target, true, path).then(() => {
            return new Model_service_init_js(target);
        });
    }
}
exports.Model_service_init_js = Model_service_init_js;
//# sourceMappingURL=Model_service_init_js.js.map