"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_mongo_expression_1 = require("./Model_mongo_expression");
/**
  mongo_expression_array
*/
class Model_mongo_expression_array extends Model_mongo_expression_1.Model_mongo_expression {
    /**
      mongo_expression_array
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_array";
        /**
  isArray
  */
        this["isArray"] = false;
        if (obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])) {
            this["value"] = obj["value"].map((value) => {
                return value.toString();
            });
        }
        if (obj["valueType"] != undefined) {
            this["valueType"] = obj["valueType"].toString();
        }
        if (obj["isArray"] != undefined) {
            this["isArray"] = new Boolean(obj["isArray"]).valueOf();
        }
    }
}
exports.Model_mongo_expression_array = Model_mongo_expression_array;
//# sourceMappingURL=Model_mongo_expression_array.js.map