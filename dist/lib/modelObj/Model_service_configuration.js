"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  c'est le service de distribution des configurations des services
*/
class Model_service_configuration extends Model_service_1.Model_service {
    /**
      c'est le service de distribution des configurations des services
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_configuration";
        /**
  le nom de la collection des services
  */
        this["serviceCollectionName"] = "services";
        /**
  les configurations de service des applications
  */
        this["serviceConfigCollectionName"] = "mongo_service_configs";
        if (obj["srvUrl"] != undefined) {
            this["srvUrl"] = obj["srvUrl"].toString();
        }
        if (obj["serviceCollectionName"] != undefined) {
            this["serviceCollectionName"] = obj["serviceCollectionName"].toString();
        }
        if (obj["serviceConfigCollectionName"] != undefined) {
            this["serviceConfigCollectionName"] = obj["serviceConfigCollectionName"].toString();
        }
    }
}
exports.Model_service_configuration = Model_service_configuration;
//# sourceMappingURL=Model_service_configuration.js.map