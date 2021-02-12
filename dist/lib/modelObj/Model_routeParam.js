"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_routeParam = void 0;
const utils_1 = require("@hfdev/utils");
/**
  paramètre d'une route
*/
class Model_routeParam extends utils_1.Base {
    /**
      paramètre d'une route
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "routeParam";
        if (obj["paramName"] != undefined) {
            this["paramName"] = obj["paramName"].toString();
        }
        if (obj["type"] != undefined) {
            this["type"] = obj["type"].toString();
        }
    }
}
exports.Model_routeParam = Model_routeParam;
