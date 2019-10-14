"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  service de gestion des message tutoré
*/
class Model_service_tutor extends Model_service_1.Model_service {
    /**
      service de gestion des message tutoré
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_tutor";
        if (obj["apiSession"] != undefined) {
            this["apiSession"] = obj["apiSession"].toString();
        }
    }
}
exports.Model_service_tutor = Model_service_tutor;
//# sourceMappingURL=Model_service_tutor.js.map