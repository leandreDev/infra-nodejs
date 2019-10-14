"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  passerelle pour goshaba
*/
class Model_service_goshabaGateway extends Model_service_1.Model_service {
    /**
      passerelle pour goshaba
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_goshabaGateway";
        if (obj["privateKey"] != undefined) {
            this["privateKey"] = obj["privateKey"].toString();
        }
        if (obj["packUrl"] != undefined) {
            this["packUrl"] = obj["packUrl"].toString();
        }
    }
}
exports.Model_service_goshabaGateway = Model_service_goshabaGateway;
//# sourceMappingURL=Model_service_goshabaGateway.js.map