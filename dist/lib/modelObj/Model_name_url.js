"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_name_url = void 0;
const utils_1 = require("@hfdev/utils");
/**
  c'est une paire nom url
*/
class Model_name_url extends utils_1.Base {
    /**
      c'est une paire nom url
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "name_url";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["url"] != undefined) {
            this["url"] = obj["url"].toString();
        }
        if (obj["refId"] != undefined) {
            this["refId"] = obj["refId"].toString();
        }
    }
}
exports.Model_name_url = Model_name_url;
