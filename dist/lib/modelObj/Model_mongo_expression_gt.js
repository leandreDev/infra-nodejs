"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_expression_gt = void 0;
const Model_mongo_expression_comp_1 = require("./Model_mongo_expression_comp");
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gt
*/
class Model_mongo_expression_gt extends Model_mongo_expression_comp_1.Model_mongo_expression_comp {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gt
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_gt";
    }
}
exports.Model_mongo_expression_gt = Model_mongo_expression_gt;
