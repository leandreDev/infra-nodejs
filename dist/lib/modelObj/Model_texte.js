"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_texte = void 0;
const _ = require("lodash");
const Model_string_1 = require("./Model_string");
/**
  champ pour texte long
*/
class Model_texte extends Model_string_1.Model_string {
    /**
      champ pour texte long
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "texte";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["isArrayOf"] != undefined) {
            this["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf();
        }
        if (obj["required"] != undefined) {
            this["required"] = new Boolean(obj["required"]).valueOf();
        }
        if (obj["unique"] != undefined) {
            this["unique"] = new Boolean(obj["unique"]).valueOf();
        }
        if (obj["index"] != undefined) {
            this["index"] = new Boolean(obj["index"]).valueOf();
        }
        if (obj["default"] != undefined) {
            this["default"] = obj["default"].toString();
        }
        if (obj["lowercase"] != undefined) {
            this["lowercase"] = new Boolean(obj["lowercase"]).valueOf();
        }
        if (obj["uppercase"] != undefined) {
            this["uppercase"] = new Boolean(obj["uppercase"]).valueOf();
        }
        if (obj["trim"] != undefined) {
            this["trim"] = new Boolean(obj["trim"]).valueOf();
        }
        if (obj["match"] != undefined) {
            this["match"] = obj["match"].toString();
        }
        if (obj["enum"] != undefined && obj["enum"] != null && _.isArray(obj["enum"])) {
            this["enum"] = obj["enum"].map((value) => {
                return value.toString();
            });
        }
    }
}
exports.Model_texte = Model_texte;
//# sourceMappingURL=Model_texte.js.map