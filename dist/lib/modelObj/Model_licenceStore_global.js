"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_licenceStore_1 = require("./Model_licenceStore");
/**
  licence store dont les applications sont le catalogue du client
*/
class Model_licenceStore_global extends Model_licenceStore_1.Model_licenceStore {
    /**
      licence store dont les applications sont le catalogue du client
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "licenceStore_global";
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
        return Model_licenceStore_global.check(target, true, path).then(() => {
            return new Model_licenceStore_global(target);
        });
    }
}
exports.Model_licenceStore_global = Model_licenceStore_global;
//# sourceMappingURL=Model_licenceStore_global.js.map