"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_mongo_expression_gt.check(target, true, path).then(() => {
            return new Model_mongo_expression_gt(target);
        });
    }
}
exports.Model_mongo_expression_gt = Model_mongo_expression_gt;
//# sourceMappingURL=Model_mongo_expression_gt.js.map