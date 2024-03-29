"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_expression_in = void 0;
const Model_mongo_expression_comp_1 = require("./Model_mongo_expression_comp");
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_in
*/
class Model_mongo_expression_in extends Model_mongo_expression_comp_1.Model_mongo_expression_comp {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_in
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_in";
    }
}
exports.Model_mongo_expression_in = Model_mongo_expression_in;
