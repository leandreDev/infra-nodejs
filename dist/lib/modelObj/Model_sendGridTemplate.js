"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_sendGridTemplate = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  template send grid
*/
class Model_sendGridTemplate extends utils_1.Base {
    /**
      template send grid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "sendGridTemplate";
        if (obj["lang"] != undefined) {
            this["lang"] = obj["lang"].toString();
        }
        if (obj["templateId"] != undefined) {
            this["templateId"] = obj["templateId"].toString();
        }
        if (obj["parametre"] != undefined && obj["parametre"] != null && _.isArray(obj["parametre"])) {
            this["parametre"] = obj["parametre"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
        if (obj["dynamic_template_data"] != undefined && obj["dynamic_template_data"] != null && _.isArray(obj["dynamic_template_data"])) {
            this["dynamic_template_data"] = obj["dynamic_template_data"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
    }
}
exports.Model_sendGridTemplate = Model_sendGridTemplate;
