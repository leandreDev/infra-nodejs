"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_celio_fid = void 0;
const Model_service_1 = require("./Model_service");
/**
  service celio fid
*/
class Model_service_celio_fid extends Model_service_1.Model_service {
    /**
      service celio fid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_celio_fid";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["accessTokenUrl"] != undefined) {
            this["accessTokenUrl"] = obj["accessTokenUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            this["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            this["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["hybrisUrl"] != undefined) {
            this["hybrisUrl"] = obj["hybrisUrl"].toString();
        }
        if (obj["baseSiteId"] != undefined) {
            this["baseSiteId"] = obj["baseSiteId"].toString();
        }
        if (obj["secretToken"] != undefined) {
            this["secretToken"] = obj["secretToken"].toString();
        }
        if (obj["serverUrl"] != undefined) {
            this["serverUrl"] = obj["serverUrl"].toString();
        }
        if (obj["caPath"] != undefined) {
            this["caPath"] = obj["caPath"].toString();
        }
    }
}
exports.Model_service_celio_fid = Model_service_celio_fid;
