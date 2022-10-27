"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_dcbm_service = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service métier de DCBM
*/
class Model_dcbm_service extends Model_service_1.Model_service {
    /**
      service métier de DCBM
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "dcbm_service";
        if (obj["bddUrl"] != undefined) {
            this["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["ssoBddUrl"] != undefined) {
            this["ssoBddUrl"] = obj["ssoBddUrl"].toString();
        }
        if (obj["infraBddUrl"] != undefined) {
            this["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["ssoApiUrl"] != undefined) {
            this["ssoApiUrl"] = obj["ssoApiUrl"].toString();
        }
        if (obj["licenceApiUrl"] != undefined) {
            this["licenceApiUrl"] = obj["licenceApiUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            this["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            this["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["SendGridConf"] != undefined) {
            if (obj["SendGridConf"]._class) {
                this["SendGridConf"] = new Index[obj["SendGridConf"]._class](obj["SendGridConf"]);
            }
            else {
                this["SendGridConf"] = new Index["DCBMMailer"](obj["SendGridConf"]);
            }
        }
        if (obj["pdfRipUrl"] != undefined) {
            this["pdfRipUrl"] = obj["pdfRipUrl"].toString();
        }
        if (obj["pdfAppUrl"] != undefined) {
            this["pdfAppUrl"] = obj["pdfAppUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            this["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["authorizedDomaine"] != undefined && obj["authorizedDomaine"] != null && _.isArray(obj["authorizedDomaine"])) {
            this["authorizedDomaine"] = obj["authorizedDomaine"].map((value) => {
                return value.toString();
            });
        }
        if (obj["adminSiteUrl"] != undefined) {
            this["adminSiteUrl"] = obj["adminSiteUrl"].toString();
        }
    }
}
exports.Model_dcbm_service = Model_dcbm_service;
