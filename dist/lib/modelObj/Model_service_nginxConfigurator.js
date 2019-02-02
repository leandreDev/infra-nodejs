"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  service_nginxConfigurator
*/
class Model_service_nginxConfigurator extends Model_service_1.Model_service {
    /**
      service_nginxConfigurator
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_nginxConfigurator";
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
        return Model_service_nginxConfigurator.check(target, true, path).then(() => {
            return new Model_service_nginxConfigurator(target);
        });
    }
}
exports.Model_service_nginxConfigurator = Model_service_nginxConfigurator;
//# sourceMappingURL=Model_service_nginxConfigurator.js.map