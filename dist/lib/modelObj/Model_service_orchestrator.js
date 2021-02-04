"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_orchestrator = void 0;
const Model_service_1 = require("./Model_service");
/**
  service d'orchestration
*/
class Model_service_orchestrator extends Model_service_1.Model_service {
    /**
      service d'orchestration
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_orchestrator";
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
    }
}
exports.Model_service_orchestrator = Model_service_orchestrator;
//# sourceMappingURL=Model_service_orchestrator.js.map