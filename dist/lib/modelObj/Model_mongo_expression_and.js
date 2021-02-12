"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_expression_and = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_mongo_expression_logical_1 = require("./Model_mongo_expression_logical");
/**
  https://docs.mongodb.com/manual/reference/operator/query/and/
*/
class Model_mongo_expression_and extends Model_mongo_expression_logical_1.Model_mongo_expression_logical {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/and/
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_and";
        if (obj["expression"] != undefined && obj["expression"] != null && _.isArray(obj["expression"])) {
            this["expression"] = obj["expression"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["mongo_expression"](value);
                }
            });
        }
    }
}
exports.Model_mongo_expression_and = Model_mongo_expression_and;
