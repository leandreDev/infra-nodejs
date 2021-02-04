"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_petit_moulin = void 0;
const Model_service_1 = require("./Model_service");
/**
  service petit moulin
*/
class Model_service_petit_moulin extends Model_service_1.Model_service {
    /**
      service petit moulin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_petit_moulin";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
    }
}
exports.Model_service_petit_moulin = Model_service_petit_moulin;
//# sourceMappingURL=Model_service_petit_moulin.js.map