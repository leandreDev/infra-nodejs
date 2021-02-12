"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_expression_lt = void 0;
const Model_mongo_expression_comp_1 = require("./Model_mongo_expression_comp");
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lt
*/
class Model_mongo_expression_lt extends Model_mongo_expression_comp_1.Model_mongo_expression_comp {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lt
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_lt";
    }
}
exports.Model_mongo_expression_lt = Model_mongo_expression_lt;
