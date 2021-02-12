"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_TemplateLodash = void 0;
const utils_1 = require("@hfdev/utils");
/**
  template lodash + nom
*/
class Model_TemplateLodash extends utils_1.Base {
    /**
      template lodash + nom
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "TemplateLodash";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["template"] != undefined) {
            this["template"] = obj["template"].toString();
        }
    }
}
exports.Model_TemplateLodash = Model_TemplateLodash;
