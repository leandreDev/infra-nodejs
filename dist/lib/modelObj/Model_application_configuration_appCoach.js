"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  c'est la configuration d'une application Coach
*/
class Model_application_configuration_appCoach extends Model_application_configuration_1.Model_application_configuration {
    /**
      c'est la configuration d'une application Coach
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_appCoach";
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
        return Model_application_configuration_appCoach.check(target, true, path).then(() => {
            return new Model_application_configuration_appCoach(target);
        });
    }
}
exports.Model_application_configuration_appCoach = Model_application_configuration_appCoach;
//# sourceMappingURL=Model_application_configuration_appCoach.js.map