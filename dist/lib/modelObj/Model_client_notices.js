"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_client_notices = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  notices for client
*/
class Model_client_notices extends utils_1.Base {
    /**
      notices for client
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "client_notices";
        if (obj["values"] != undefined && obj["values"] != null && _.isArray(obj["values"])) {
            this["values"] = obj["values"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["notice_field"](value);
                }
            });
        }
    }
}
exports.Model_client_notices = Model_client_notices;
