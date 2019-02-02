"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  template send grid
*/
class Model_sendGridTemplate extends utils_1.Base {
    /**
      template send grid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "sendGridTemplate";
        if (obj["lang"] != undefined) {
            this["lang"] = obj["lang"].toString();
        }
        if (obj["templateId"] != undefined) {
            this["templateId"] = obj["templateId"].toString();
        }
        if (obj["parametre"] != undefined && obj["parametre"] != null && _.isArray(obj["parametre"])) {
            this["parametre"] = obj["parametre"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["lang"] == null || target["lang"] == undefined)) {
                throw new Error(path + "lang is required");
            }
            if (target["lang"] != null && target["lang"] != undefined) {
                let _lang = target["lang"];
                if (!_.isString(_lang)) {
                    throw new Error(path + "lang is not a string");
                }
            }
            if (isCompleteObj && (target["templateId"] == null || target["templateId"] == undefined)) {
                throw new Error(path + "templateId is required");
            }
            if (target["templateId"] != null && target["templateId"] != undefined) {
                let _templateId = target["templateId"];
                if (!_.isString(_templateId)) {
                    throw new Error(path + "templateId is not a string");
                }
            }
            if (target["parametre"] != null && target["parametre"] != undefined) {
                target["parametre"].forEach((_parametre, index) => {
                    promArr.push(Index["name_value"].check(_parametre, isCompleteObj, path + "parametre.")
                        .catch((err) => {
                        throw new Error(path + "parametre index: " + index + "is not name_value");
                    }));
                    if (_parametre._class != null && _parametre._class != undefined) {
                        promArr.push(Index[_parametre._class].check(_parametre, isCompleteObj, path + "parametre.")
                            .catch((err) => {
                            throw new Error(path + "parametre index: " + index + "is not a " + _parametre._class);
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
        return Model_sendGridTemplate.check(target, true, path).then(() => {
            return new Model_sendGridTemplate(target);
        });
    }
}
exports.Model_sendGridTemplate = Model_sendGridTemplate;
//# sourceMappingURL=Model_sendGridTemplate.js.map