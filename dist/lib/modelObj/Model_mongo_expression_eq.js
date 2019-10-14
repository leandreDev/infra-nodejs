"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_mongo_expression_comp_1 = require("./Model_mongo_expression_comp");
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_eq
*/
class Model_mongo_expression_eq extends Model_mongo_expression_comp_1.Model_mongo_expression_comp {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_eq
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_eq";
    }
}
exports.Model_mongo_expression_eq = Model_mongo_expression_eq;
//# sourceMappingURL=Model_mongo_expression_eq.js.map