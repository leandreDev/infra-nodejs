"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  initalisation des listes
*/
class Model_dataTableInit extends utils_1.Base {
    /**
      initalisation des listes
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "dataTableInit";
        if (obj["fieldsNames"] != undefined && obj["fieldsNames"] != null && _.isArray(obj["fieldsNames"])) {
            this["fieldsNames"] = obj["fieldsNames"].map((value) => {
                return value.toString();
            });
        }
        if (obj["sortField"] != undefined) {
            this["sortField"] = obj["sortField"].toString();
        }
        if (obj["direction"] != undefined) {
            this["direction"] = obj["direction"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["fieldsNames"] != null && target["fieldsNames"] != undefined) {
                target["fieldsNames"].forEach((_fieldsNames, index) => {
                    if (!_.isString(_fieldsNames)) {
                        throw new Error(path + "fieldsNames index: " + index + "is not a string");
                    }
                });
            }
            if (target["sortField"] != null && target["sortField"] != undefined) {
                let _sortField = target["sortField"];
                if (!_.isString(_sortField)) {
                    throw new Error(path + "sortField is not a string");
                }
            }
            if (target["direction"] != null && target["direction"] != undefined) {
                let _direction = target["direction"];
                if (!_.isString(_direction)) {
                    throw new Error(path + "direction is not a string");
                }
                let _enum_direction = ["asc", "desc"];
                if (_enum_direction.indexOf(_direction) == -1) {
                    throw new Error(path + "direction dont match one of asc , desc");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_dataTableInit.check(target, true, path).then(() => {
            return new Model_dataTableInit(target);
        });
    }
}
exports.Model_dataTableInit = Model_dataTableInit;
//# sourceMappingURL=Model_dataTableInit.js.map