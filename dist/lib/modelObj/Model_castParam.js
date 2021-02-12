"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_castParam = void 0;
const utils_1 = require("utils");
/**
  paramètre d'une querry qui doit être casté
*/
class Model_castParam extends utils_1.Base {
    /**
      paramètre d'une querry qui doit être casté
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "castParam";
        if (obj["paramName"] != undefined) {
            this["paramName"] = obj["paramName"].toString();
        }
        if (obj["type"] != undefined) {
            this["type"] = obj["type"].toString();
        }
        if (obj["param"] != undefined) {
            this["param"] = obj["param"].toString();
        }
    }
}
exports.Model_castParam = Model_castParam;
