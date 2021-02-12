"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_periodicalDistrution = void 0;
const utils_1 = require("utils");
/**
  période de distribution
*/
class Model_periodicalDistrution extends utils_1.Base {
    /**
      période de distribution
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "periodicalDistrution";
        if (obj["nbMax"] != undefined) {
            this["nbMax"] = new Number(obj["nbMax"]).valueOf();
        }
        if (obj["currentNb"] != undefined) {
            this["currentNb"] = new Number(obj["currentNb"]).valueOf();
        }
    }
}
exports.Model_periodicalDistrution = Model_periodicalDistrution;
