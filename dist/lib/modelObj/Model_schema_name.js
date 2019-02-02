"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  mapping de schema et de nom
*/
class Model_schema_name extends utils_1.Base {
    /**
      mapping de schema et de nom
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "schema_name";
        if (obj["entity"] != undefined) {
            this["entity"] = obj["entity"].toString();
        }
        if (obj["singular"] != undefined) {
            this["singular"] = obj["singular"].toString();
        }
        if (obj["plural"] != undefined) {
            this["plural"] = obj["plural"].toString();
        }
        if (obj["fieldName"] != undefined) {
            this["fieldName"] = obj["fieldName"].toString();
        }
        if (obj["unvisibleFields"] != undefined && obj["unvisibleFields"] != null && _.isArray(obj["unvisibleFields"])) {
            this["unvisibleFields"] = obj["unvisibleFields"].map((value) => {
                return value.toString();
            });
        }
        if (obj["fieldsNames"] != undefined && obj["fieldsNames"] != null && _.isArray(obj["fieldsNames"])) {
            this["fieldsNames"] = obj["fieldsNames"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
        if (obj["listParameter"] != undefined) {
            if (obj._class) {
                this["listParameter"] = new Index[obj._class](obj["listParameter"]);
            }
            else {
                this["listParameter"] = new Index["dataTableInit"](obj["listParameter"]);
            }
        }
        if (obj["create"] != undefined) {
            this["create"] = new Boolean(obj["create"]).valueOf();
        }
        if (obj["delete"] != undefined) {
            this["delete"] = new Boolean(obj["delete"]).valueOf();
        }
        if (obj["clone"] != undefined) {
            this["clone"] = new Boolean(obj["clone"]).valueOf();
        }
        if (obj["update"] != undefined) {
            this["update"] = new Boolean(obj["update"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["entity"] != null && target["entity"] != undefined) {
                let _entity = target["entity"];
                if (!_.isString(_entity)) {
                    throw new Error(path + "entity is not a string");
                }
            }
            if (target["singular"] != null && target["singular"] != undefined) {
                let _singular = target["singular"];
                if (!_.isString(_singular)) {
                    throw new Error(path + "singular is not a string");
                }
            }
            if (target["plural"] != null && target["plural"] != undefined) {
                let _plural = target["plural"];
                if (!_.isString(_plural)) {
                    throw new Error(path + "plural is not a string");
                }
            }
            if (target["fieldName"] != null && target["fieldName"] != undefined) {
                let _fieldName = target["fieldName"];
                if (!_.isString(_fieldName)) {
                    throw new Error(path + "fieldName is not a string");
                }
            }
            if (target["unvisibleFields"] != null && target["unvisibleFields"] != undefined) {
                target["unvisibleFields"].forEach((_unvisibleFields, index) => {
                    if (!_.isString(_unvisibleFields)) {
                        throw new Error(path + "unvisibleFields index: " + index + "is not a string");
                    }
                });
            }
            if (target["fieldsNames"] != null && target["fieldsNames"] != undefined) {
                target["fieldsNames"].forEach((_fieldsNames, index) => {
                    promArr.push(Index["name_value"].check(_fieldsNames, isCompleteObj, path + "fieldsNames.")
                        .catch((err) => {
                        throw new Error(path + "fieldsNames index: " + index + "is not name_value");
                    }));
                    if (_fieldsNames._class != null && _fieldsNames._class != undefined) {
                        promArr.push(Index[_fieldsNames._class].check(_fieldsNames, isCompleteObj, path + "fieldsNames.")
                            .catch((err) => {
                            throw new Error(path + "fieldsNames index: " + index + "is not a " + _fieldsNames._class);
                        }));
                    }
                });
            }
            if (target["listParameter"] != null && target["listParameter"] != undefined) {
                let _listParameter = target["listParameter"];
                promArr.push(Index["dataTableInit"].check(_listParameter, isCompleteObj, path + "listParameter.")
                    .catch((err) => {
                    throw new Error(path + "listParameter is not ");
                }));
                if (_listParameter._class != null && _listParameter._class != undefined) {
                    promArr.push(Index[_listParameter._class].check(_listParameter, isCompleteObj, path + "listParameter.")
                        .catch((err) => {
                        throw new Error(path + "listParameter is not a " + _listParameter._class);
                    }));
                }
            }
            if (target["create"] != null && target["create"] != undefined) {
                let _create = target["create"];
                if (!_.isBoolean(_create)) {
                    throw new Error(path + "create is not a boolean");
                }
            }
            if (target["delete"] != null && target["delete"] != undefined) {
                let _delete = target["delete"];
                if (!_.isBoolean(_delete)) {
                    throw new Error(path + "delete is not a boolean");
                }
            }
            if (target["clone"] != null && target["clone"] != undefined) {
                let _clone = target["clone"];
                if (!_.isBoolean(_clone)) {
                    throw new Error(path + "clone is not a boolean");
                }
            }
            if (target["update"] != null && target["update"] != undefined) {
                let _update = target["update"];
                if (!_.isBoolean(_update)) {
                    throw new Error(path + "update is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_schema_name.check(target, true, path).then(() => {
            return new Model_schema_name(target);
        });
    }
}
exports.Model_schema_name = Model_schema_name;
//# sourceMappingURL=Model_schema_name.js.map