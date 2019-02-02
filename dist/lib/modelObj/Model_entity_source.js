"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  association d'une entité et de l'url de son service
*/
class Model_entity_source extends utils_1.Base {
    /**
      association d'une entité et de l'url de son service
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "entity_source";
        if (obj["url"] != undefined) {
            this["url"] = obj["url"].toString();
        }
        if (obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])) {
            this["entityName"] = obj["entityName"].map((value) => {
                return value.toString();
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["url"] != null && target["url"] != undefined) {
                let _url = target["url"];
                if (!_.isString(_url)) {
                    throw new Error(path + "url is not a string");
                }
            }
            if (target["entityName"] != null && target["entityName"] != undefined) {
                target["entityName"].forEach((_entityName, index) => {
                    if (!_.isString(_entityName)) {
                        throw new Error(path + "entityName index: " + index + "is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_entity_source.check(target, true, path).then(() => {
            return new Model_entity_source(target);
        });
    }
}
exports.Model_entity_source = Model_entity_source;
//# sourceMappingURL=Model_entity_source.js.map