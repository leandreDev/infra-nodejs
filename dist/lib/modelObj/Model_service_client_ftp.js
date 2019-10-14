"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  client ftps
*/
class Model_service_client_ftp extends Model_service_1.Model_service {
    /**
      client ftps
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_client_ftp";
        /**
  port
  */
        this["ftpPort"] = 21;
        if (obj["host"] != undefined) {
            this["host"] = obj["host"].toString();
        }
        if (obj["ftpPort"] != undefined) {
            this["ftpPort"] = new Number(obj["ftpPort"]).valueOf();
        }
        if (obj["user"] != undefined) {
            this["user"] = obj["user"].toString();
        }
        if (obj["password"] != undefined) {
            this["password"] = obj["password"].toString();
        }
        if (obj["downloadPath"] != undefined) {
            this["downloadPath"] = obj["downloadPath"].toString();
        }
    }
}
exports.Model_service_client_ftp = Model_service_client_ftp;
//# sourceMappingURL=Model_service_client_ftp.js.map