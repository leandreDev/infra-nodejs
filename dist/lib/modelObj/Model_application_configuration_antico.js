"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  configuration d'un parcourt anticoruption
*/
class Model_application_configuration_antico extends Model_application_configuration_1.Model_application_configuration {
    /**
      configuration d'un parcourt anticoruption
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_antico";
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
        return Model_application_configuration_antico.check(target, true, path).then(() => {
            return new Model_application_configuration_antico(target);
        });
    }
}
exports.Model_application_configuration_antico = Model_application_configuration_antico;
//# sourceMappingURL=Model_application_configuration_antico.js.map