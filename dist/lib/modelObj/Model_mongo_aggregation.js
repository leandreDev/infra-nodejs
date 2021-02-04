"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mongo_aggregation = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  les opérateurs d'aggregation du pipe de mongo
*/
class Model_mongo_aggregation extends utils_1.Base {
    /**
      les opérateurs d'aggregation du pipe de mongo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_aggregation";
        if (obj["from"] != undefined) {
            if (_.isString(obj["from"])) {
                this["from"] = obj["from"];
            }
            else if (obj["from"]._id) {
                this["from"] = obj["from"]._id;
            }
        }
    }
}
exports.Model_mongo_aggregation = Model_mongo_aggregation;
//# sourceMappingURL=Model_mongo_aggregation.js.map