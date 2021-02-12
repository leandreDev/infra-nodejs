"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_expression_gte = void 0;
const Model_mongo_expression_comp_1 = require("./Model_mongo_expression_comp");
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gte
*/
class Model_mongo_expression_gte extends Model_mongo_expression_comp_1.Model_mongo_expression_comp {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gte
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_gte";
    }
}
exports.Model_mongo_expression_gte = Model_mongo_expression_gte;
