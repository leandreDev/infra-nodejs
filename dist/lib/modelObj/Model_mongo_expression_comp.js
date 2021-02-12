"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_expression_comp = void 0;
const _ = require("lodash");
const Model_mongo_expression_1 = require("./Model_mongo_expression");
/**
  mongo_expression_comp
*/
class Model_mongo_expression_comp extends Model_mongo_expression_1.Model_mongo_expression {
    /**
      mongo_expression_comp
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_comp";
        if (obj["field"] != undefined) {
            this["field"] = obj["field"].toString();
        }
        if (obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])) {
            this["value"] = obj["value"].map((value) => {
                return value.toString();
            });
        }
        if (obj["dataType"] != undefined) {
            this["dataType"] = obj["dataType"].toString();
        }
        if (obj["isArray"] != undefined) {
            this["isArray"] = new Boolean(obj["isArray"]).valueOf();
        }
    }
}
exports.Model_mongo_expression_comp = Model_mongo_expression_comp;
