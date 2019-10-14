"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_field_1 = require("./Model_field");
/**
  modelid
*/
class Model_modelid extends Model_field_1.Model_field {
    /**
      modelid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "modelid";
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
        if (obj["ref"] != undefined) {
            this["ref"] = obj["ref"].toString();
        }
    }
}
exports.Model_modelid = Model_modelid;
//# sourceMappingURL=Model_modelid.js.map