"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_ConfAutomation = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  Configuration pour les automation des services qbp
*/
class Model_ConfAutomation extends utils_1.Base {
    /**
      Configuration pour les automation des services qbp
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "ConfAutomation";
        if (obj["datesForGeneratePayout"] != undefined && obj["datesForGeneratePayout"] != null && _.isArray(obj["datesForGeneratePayout"])) {
            this["datesForGeneratePayout"] = obj["datesForGeneratePayout"].map((value) => {
                return new Number(value).valueOf();
            });
        }
        if (obj["datesForGenerateInvoice"] != undefined && obj["datesForGenerateInvoice"] != null && _.isArray(obj["datesForGenerateInvoice"])) {
            this["datesForGenerateInvoice"] = obj["datesForGenerateInvoice"].map((value) => {
                return new Number(value).valueOf();
            });
        }
    }
}
exports.Model_ConfAutomation = Model_ConfAutomation;
