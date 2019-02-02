"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_mongo_expression_logical_1 = require("./Model_mongo_expression_logical");
/**
  https://docs.mongodb.com/manual/reference/operator/query/nor/
*/
class Model_mongo_expression_nor extends Model_mongo_expression_logical_1.Model_mongo_expression_logical {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/nor/
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_nor";
        if (obj["expression"] != undefined && obj["expression"] != null && _.isArray(obj["expression"])) {
            this["expression"] = obj["expression"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["mongo_expression"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["expression"] == null || target["expression"] == undefined)) {
                throw new Error(path + "expression is required");
            }
            if (target["expression"] != null && target["expression"] != undefined) {
                target["expression"].forEach((_expression, index) => {
                    promArr.push(Index["mongo_expression"].check(_expression, isCompleteObj, path + "expression.")
                        .catch((err) => {
                        throw new Error(path + "expression index: " + index + "is not mongo_expression");
                    }));
                    if (_expression._class != null && _expression._class != undefined) {
                        promArr.push(Index[_expression._class].check(_expression, isCompleteObj, path + "expression.")
                            .catch((err) => {
                            throw new Error(path + "expression index: " + index + "is not a " + _expression._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_mongo_expression_nor.check(target, true, path).then(() => {
            return new Model_mongo_expression_nor(target);
        });
    }
}
exports.Model_mongo_expression_nor = Model_mongo_expression_nor;
//# sourceMappingURL=Model_mongo_expression_nor.js.map