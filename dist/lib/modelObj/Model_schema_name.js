"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_schema_name = void 0;
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
            if (obj["listParameter"]._class) {
                this["listParameter"] = new Index[obj["listParameter"]._class](obj["listParameter"]);
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
}
exports.Model_schema_name = Model_schema_name;
