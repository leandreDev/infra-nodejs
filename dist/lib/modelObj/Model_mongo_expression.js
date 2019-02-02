"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
/**
  mongo_expression
*/
class Model_mongo_expression extends utils_1.Base {
    /**
      mongo_expression
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression";
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
        return Model_mongo_expression.check(target, true, path).then(() => {
            return new Model_mongo_expression(target);
        });
    }
}
exports.Model_mongo_expression = Model_mongo_expression;
//# sourceMappingURL=Model_mongo_expression.js.map