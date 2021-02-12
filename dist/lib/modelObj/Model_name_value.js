"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_name_value = void 0;
const utils_1 = require("utils");
/**
  paire clef valeur
*/
class Model_name_value extends utils_1.Base {
    /**
      paire clef valeur
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "name_value";
        if (obj["key"] != undefined) {
            this["key"] = obj["key"].toString();
        }
        if (obj["value"] != undefined) {
            this["value"] = obj["value"].toString();
        }
    }
}
exports.Model_name_value = Model_name_value;
