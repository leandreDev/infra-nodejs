"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
/**
  service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
*/
class Model_service_serviceOrchestrator extends utils_1.Base {
    /**
      service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_serviceOrchestrator";
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
        return Model_service_serviceOrchestrator.check(target, true, path).then(() => {
            return new Model_service_serviceOrchestrator(target);
        });
    }
}
exports.Model_service_serviceOrchestrator = Model_service_serviceOrchestrator;
//# sourceMappingURL=Model_service_serviceOrchestrator.js.map