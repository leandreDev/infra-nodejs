"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_entity_source = void 0;
const _ = require("lodash");
const utils_1 = require("@hfdev/utils");
/**
  association d'une entité et de l'url de son service
*/
class Model_entity_source extends utils_1.Base {
    /**
      association d'une entité et de l'url de son service
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "entity_source";
        if (obj["url"] != undefined) {
            this["url"] = obj["url"].toString();
        }
        if (obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])) {
            this["entityName"] = obj["entityName"].map((value) => {
                return value.toString();
            });
        }
    }
}
exports.Model_entity_source = Model_entity_source;
