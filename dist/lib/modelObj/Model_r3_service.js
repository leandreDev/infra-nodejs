"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_r3_service = void 0;
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service métier de QBP
*/
class Model_r3_service extends Model_service_1.Model_service {
    /**
      service métier de QBP
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "r3_service";
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
                this["SendGridConf"] = new Index["R3Mailer"](obj["SendGridConf"]);
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
        if (obj["parntaireConfig"] != undefined) {
            if (obj["parntaireConfig"]._class) {
                this["parntaireConfig"] = new Index[obj["parntaireConfig"]._class](obj["parntaireConfig"]);
            }
            else {
                this["parntaireConfig"] = new Index["ParnerDeployConf"](obj["parntaireConfig"]);
            }
        }
    }
}
exports.Model_r3_service = Model_r3_service;
