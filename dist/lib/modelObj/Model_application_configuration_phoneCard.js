"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  configuration d'une application phoneCard
*/
class Model_application_configuration_phoneCard extends Model_application_configuration_1.Model_application_configuration {
    /**
      configuration d'une application phoneCard
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_phoneCard";
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
        return Model_application_configuration_phoneCard.check(target, true, path).then(() => {
            return new Model_application_configuration_phoneCard(target);
        });
    }
}
exports.Model_application_configuration_phoneCard = Model_application_configuration_phoneCard;
//# sourceMappingURL=Model_application_configuration_phoneCard.js.map