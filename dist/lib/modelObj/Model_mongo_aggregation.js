"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["from"] != null && target["from"] != undefined) {
                let _from = target["from"];
                if (!_.isString(_from)) {
                    if (!_.isString(_from)) {
                        throw new Error(path + "from is not a string");
                    }
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_mongo_aggregation.check(target, true, path).then(() => {
            return new Model_mongo_aggregation(target);
        });
    }
}
exports.Model_mongo_aggregation = Model_mongo_aggregation;
//# sourceMappingURL=Model_mongo_aggregation.js.map