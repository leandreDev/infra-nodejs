"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mail = void 0;
const utils_1 = require("@hfdev/utils");
/**
  collection de mail
*/
class Model_mail extends utils_1.Base {
    /**
      collection de mail
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mail";
    }
}
exports.Model_mail = Model_mail;
