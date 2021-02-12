"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_init_js = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service qui retourne un init.js
*/
class Model_service_init_js extends Model_service_1.Model_service {
    /**
      service qui retourne un init.js
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_init_js";
        if (obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])) {
            this["templates"] = obj["templates"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["TemplateLodash"](value);
                }
            });
        }
    }
}
exports.Model_service_init_js = Model_service_init_js;
