"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_mongo_expression_comp_1 = require("./Model_mongo_expression_comp");
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_nin
*/
class Model_mongo_expression_ne extends Model_mongo_expression_comp_1.Model_mongo_expression_comp {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_nin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_ne";
    }
}
exports.Model_mongo_expression_ne = Model_mongo_expression_ne;
//# sourceMappingURL=Model_mongo_expression_ne.js.map