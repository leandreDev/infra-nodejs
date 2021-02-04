"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_expression_or = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_mongo_expression_logical_1 = require("./Model_mongo_expression_logical");
/**
  https://docs.mongodb.com/manual/reference/operator/query/or/
*/
class Model_mongo_expression_or extends Model_mongo_expression_logical_1.Model_mongo_expression_logical {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/or/
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_expression_or";
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
}
exports.Model_mongo_expression_or = Model_mongo_expression_or;
//# sourceMappingURL=Model_mongo_expression_or.js.map