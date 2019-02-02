"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  c'est un sso
*/
class Model_service_sso extends Model_service_1.Model_service {
    /**
      c'est un sso
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_sso";
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
        return Model_service_sso.check(target, true, path).then(() => {
            return new Model_service_sso(target);
        });
    }
}
exports.Model_service_sso = Model_service_sso;
//# sourceMappingURL=Model_service_sso.js.map