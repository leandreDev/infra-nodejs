"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
/**
  mongo_queryfilter
*/
class Model_mongo_queryfilter extends utils_1.Base {
    /**
      mongo_queryfilter
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mongo_queryfilter";
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
        return Model_mongo_queryfilter.check(target, true, path).then(() => {
            return new Model_mongo_queryfilter(target);
        });
    }
}
exports.Model_mongo_queryfilter = Model_mongo_queryfilter;
//# sourceMappingURL=Model_mongo_queryfilter.js.map