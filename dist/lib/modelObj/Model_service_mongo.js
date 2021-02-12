"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_mongo = void 0;
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
        if (obj["mongoosePath"] != undefined) {
            this["mongoosePath"] = obj["mongoosePath"].toString();
        }
        if (obj["mongoAuthSource"] != undefined) {
            this["mongoAuthSource"] = obj["mongoAuthSource"].toString();
        }
    }
}
exports.Model_service_mongo = Model_service_mongo;
