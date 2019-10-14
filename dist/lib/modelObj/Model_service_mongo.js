"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  configure un service mongo
*/
class Model_service_mongo extends Model_service_1.Model_service {
    /**
      configure un service mongo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_mongo";
        /**
  clef secrète de communication interne a l'infra
  */
        this["secretKey"] = "$$ENV.SECRET";
        if (obj["mongoosePath"] != undefined) {
            this["mongoosePath"] = obj["mongoosePath"].toString();
        }
        if (obj["mongoAuthSource"] != undefined) {
            this["mongoAuthSource"] = obj["mongoAuthSource"].toString();
        }
        if (obj["secretKey"] != undefined) {
            this["secretKey"] = obj["secretKey"].toString();
        }
    }
}
exports.Model_service_mongo = Model_service_mongo;
//# sourceMappingURL=Model_service_mongo.js.map