"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  service de creation de pdf
*/
class Model_service_pdfrip extends Model_service_1.Model_service {
    /**
      service de creation de pdf
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_pdfrip";
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
        return Model_service_pdfrip.check(target, true, path).then(() => {
            return new Model_service_pdfrip(target);
        });
    }
}
exports.Model_service_pdfrip = Model_service_pdfrip;
//# sourceMappingURL=Model_service_pdfrip.js.map