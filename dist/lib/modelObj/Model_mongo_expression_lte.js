"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_expression_lte = void 0;
const Model_mongo_expression_comp_1 = require("./Model_mongo_expression_comp");
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lte
*/
class Model_mongo_expression_lte extends Model_mongo_expression_comp_1.Model_mongo_expression_comp {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lte
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_lte";
    }
}
exports.Model_mongo_expression_lte = Model_mongo_expression_lte;
