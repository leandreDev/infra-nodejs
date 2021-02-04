"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_ferrand = void 0;
const Model_service_1 = require("./Model_service");
/**
  service ferrand
*/
class Model_service_ferrand extends Model_service_1.Model_service {
    /**
      service ferrand
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_ferrand";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
    }
}
exports.Model_service_ferrand = Model_service_ferrand;
//# sourceMappingURL=Model_service_ferrand.js.map