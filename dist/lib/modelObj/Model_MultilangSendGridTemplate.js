"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
class Model_MultilangSendGridTemplate extends utils_1.Base {
    /**
      décrit un template multi langue d'envoie de mail avec sendGrid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "MultilangSendGridTemplate";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["sendGridTemplates"] != undefined && obj["sendGridTemplates"] != null && _.isArray(obj["sendGridTemplates"])) {
            this["sendGridTemplates"] = obj["sendGridTemplates"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["sendGridTemplate"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["sendGridTemplates"] != null && target["sendGridTemplates"] != undefined) {
                target["sendGridTemplates"].forEach((_sendGridTemplates, index) => {
                    promArr.push(Index["sendGridTemplate"].check(_sendGridTemplates, isCompleteObj, path + "sendGridTemplates.")
                        .catch((err) => {
                        throw new Error(path + "sendGridTemplates index: " + index + "is not sendGridTemplate");
                    }));
                    if (_sendGridTemplates._class != null && _sendGridTemplates._class != undefined) {
                        promArr.push(Index[_sendGridTemplates._class].check(_sendGridTemplates, isCompleteObj, path + "sendGridTemplates.")
                            .catch((err) => {
                            throw new Error(path + "sendGridTemplates index: " + index + "is not a " + _sendGridTemplates._class);
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
        return Model_MultilangSendGridTemplate.check(target, true, path).then(() => {
            return new Model_MultilangSendGridTemplate(target);
        });
    }
}
exports.Model_MultilangSendGridTemplate = Model_MultilangSendGridTemplate;
//# sourceMappingURL=Model_MultilangSendGridTemplate.js.map