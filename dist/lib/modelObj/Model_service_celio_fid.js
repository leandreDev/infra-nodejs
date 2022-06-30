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
        if (obj["sponsorPoints"] != undefined) {
            this["sponsorPoints"] = new Number(obj["sponsorPoints"]).valueOf();
        }
        if (obj["childPoints"] != undefined) {
            this["childPoints"] = new Number(obj["childPoints"]).valueOf();
        }
        if (obj["cappingThreshold"] != undefined) {
            this["cappingThreshold"] = obj["cappingThreshold"].toString();
        }
        if (obj["sponsorshipFrequencyUnit"] != undefined) {
            this["sponsorshipFrequencyUnit"] = new Number(obj["sponsorshipFrequencyUnit"]).valueOf();
        }
        if (obj["sponsorshipMaxCount"] != undefined) {
            this["sponsorshipMaxCount"] = new Number(obj["sponsorshipMaxCount"]).valueOf();
        }
        if (obj["fixedEarnFrequencyUnit"] != undefined) {
            this["fixedEarnFrequencyUnit"] = new Number(obj["fixedEarnFrequencyUnit"]).valueOf();
        }
        if (obj["fixedEarnValue"] != undefined) {
            this["fixedEarnValue"] = new Number(obj["fixedEarnValue"]).valueOf();
        }
        if (obj["fixedEarnMaxCount"] != undefined) {
            this["fixedEarnMaxCount"] = new Number(obj["fixedEarnMaxCount"]).valueOf();
        }
    }
}
exports.Model_service_celio_fid = Model_service_celio_fid;
