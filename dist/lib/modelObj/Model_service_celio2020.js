"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  service celio 2020
*/
class Model_service_celio2020 extends Model_service_1.Model_service {
    /**
      service celio 2020
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_celio2020";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
    }
}
exports.Model_service_celio2020 = Model_service_celio2020;
//# sourceMappingURL=Model_service_celio2020.js.map