"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_mongo_expression_1 = require("./Model_mongo_expression");
/**
  Logical Query Operators
*/
class Model_mongo_expression_logical extends Model_mongo_expression_1.Model_mongo_expression {
    /**
      Logical Query Operators
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_logical";
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
        return Model_mongo_expression_logical.check(target, true, path).then(() => {
            return new Model_mongo_expression_logical(target);
        });
    }
}
exports.Model_mongo_expression_logical = Model_mongo_expression_logical;
//# sourceMappingURL=Model_mongo_expression_logical.js.map