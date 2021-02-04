"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_airport = void 0;
const Model_service_1 = require("./Model_service");
/**
  service airport
*/
class Model_service_airport extends Model_service_1.Model_service {
    /**
      service airport
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_airport";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
    }
}
exports.Model_service_airport = Model_service_airport;
//# sourceMappingURL=Model_service_airport.js.map