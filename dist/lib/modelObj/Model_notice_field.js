"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_notice_field = void 0;
const utils_1 = require("@hfdev/utils");
/**
  notice field
*/
class Model_notice_field extends utils_1.Base {
    /**
      notice field
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "notice_field";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["content"] != undefined) {
            this["content"] = obj["content"].toString();
        }
    }
}
exports.Model_notice_field = Model_notice_field;
