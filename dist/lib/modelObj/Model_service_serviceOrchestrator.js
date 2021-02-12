"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_serviceOrchestrator = void 0;
const utils_1 = require("@hfdev/utils");
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
}
exports.Model_service_serviceOrchestrator = Model_service_serviceOrchestrator;
