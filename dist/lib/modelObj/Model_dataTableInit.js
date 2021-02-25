"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_dataTableInit = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  initalisation des listes
*/
class Model_dataTableInit extends utils_1.Base {
    /**
      initalisation des listes
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "dataTableInit";
        if (obj["fieldsNames"] != undefined && obj["fieldsNames"] != null && _.isArray(obj["fieldsNames"])) {
            this["fieldsNames"] = obj["fieldsNames"].map((value) => {
                return value.toString();
            });
        }
        if (obj["sortField"] != undefined) {
            this["sortField"] = obj["sortField"].toString();
        }
        if (obj["direction"] != undefined) {
            this["direction"] = obj["direction"].toString();
        }
    }
}
exports.Model_dataTableInit = Model_dataTableInit;
