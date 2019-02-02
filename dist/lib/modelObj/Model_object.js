"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_field_1 = require("./Model_field");
/**
  ce champ représente les objets
*/
class Model_object extends Model_field_1.Model_field {
    /**
      ce champ représente les objets
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "object";
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
        return Model_object.check(target, true, path).then(() => {
            return new Model_object(target);
        });
    }
}
exports.Model_object = Model_object;
//# sourceMappingURL=Model_object.js.map