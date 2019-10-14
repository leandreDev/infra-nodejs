"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_field_1 = require("./Model_field");
/**
  ce champ représente les dates
*/
class Model_date extends Model_field_1.Model_field {
    /**
      ce champ représente les dates
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "date";
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
            this["default"] = new Date(obj["default"]);
        }
        if (obj["min"] != undefined) {
            this["min"] = new Date(obj["min"]);
        }
        if (obj["max"] != undefined) {
            this["max"] = new Date(obj["max"]);
        }
    }
}
exports.Model_date = Model_date;
//# sourceMappingURL=Model_date.js.map