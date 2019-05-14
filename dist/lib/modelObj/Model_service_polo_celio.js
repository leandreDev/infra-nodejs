"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  service de tirage au sort de polo
*/
class Model_service_polo_celio extends Model_service_1.Model_service {
    /**
      service de tirage au sort de polo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_polo_celio";
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
        return Model_service_polo_celio.check(target, true, path).then(() => {
            return new Model_service_polo_celio(target);
        });
    }
}
exports.Model_service_polo_celio = Model_service_polo_celio;
//# sourceMappingURL=Model_service_polo_celio.js.map