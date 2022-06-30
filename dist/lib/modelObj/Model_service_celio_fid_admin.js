"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_celio_fid_admin = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service celio fid admin
*/
class Model_service_celio_fid_admin extends Model_service_1.Model_service {
    /**
      service celio fid admin
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_celio_fid_admin";
        /**
  taille des pages scan earn
  */
        this["scanOrderEarnPageSize"] = 200;
        /**
  taille des pages scan eaBurn
  */
        this["scanOrderEaBurnPageSize"] = 200;
        if (obj["fiBddUrl"] != undefined) {
            this["fiBddUrl"] = obj["fiBddUrl"].toString();
        }
        if (obj["qcmBddUrl"] != undefined) {
            this["qcmBddUrl"] = obj["qcmBddUrl"].toString();
        }
        if (obj["accessTokenUrl"] != undefined) {
            this["accessTokenUrl"] = obj["accessTokenUrl"].toString();
        }
        if (obj["validateTokenUrl"] != undefined) {
            this["validateTokenUrl"] = obj["validateTokenUrl"].toString();
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
        if (obj["earnEuroToPoint"] != undefined) {
            this["earnEuroToPoint"] = new Number(obj["earnEuroToPoint"]).valueOf();
        }
        if (obj["burnEuroToPoint"] != undefined) {
            this["burnEuroToPoint"] = new Number(obj["burnEuroToPoint"]).valueOf();
        }
        if (obj["serverUrl"] != undefined) {
            this["serverUrl"] = obj["serverUrl"].toString();
        }
        if (obj["secretToken"] != undefined) {
            this["secretToken"] = obj["secretToken"].toString();
        }
        if (obj["basSiteId"] != undefined) {
            this["basSiteId"] = obj["basSiteId"].toString();
        }
        if (obj["certifPath"] != undefined) {
            this["certifPath"] = obj["certifPath"].toString();
        }
        if (obj["caPath"] != undefined) {
            this["caPath"] = obj["caPath"].toString();
        }
        if (obj["sftp"] != undefined) {
            if (obj["sftp"]._class) {
                this["sftp"] = new Index[obj["sftp"]._class](obj["sftp"]);
            }
            else {
                this["sftp"] = new Index["ftpConf"](obj["sftp"]);
            }
        }
        if (obj["sftpTicketSrcPath"] != undefined) {
            this["sftpTicketSrcPath"] = obj["sftpTicketSrcPath"].toString();
        }
        if (obj["sftpTicketDestPath"] != undefined) {
            this["sftpTicketDestPath"] = obj["sftpTicketDestPath"].toString();
        }
        if (obj["cbFidAdminUrl"] != undefined) {
            this["cbFidAdminUrl"] = obj["cbFidAdminUrl"].toString();
        }
        if (obj["ticket_costCenterExcluded"] != undefined && obj["ticket_costCenterExcluded"] != null && _.isArray(obj["ticket_costCenterExcluded"])) {
            this["ticket_costCenterExcluded"] = obj["ticket_costCenterExcluded"].map((value) => {
                return value.toString();
            });
        }
        if (obj["scanOrderEarnPageSize"] != undefined) {
            this["scanOrderEarnPageSize"] = new Number(obj["scanOrderEarnPageSize"]).valueOf();
        }
        if (obj["scanOrderEaBurnPageSize"] != undefined) {
            this["scanOrderEaBurnPageSize"] = new Number(obj["scanOrderEaBurnPageSize"]).valueOf();
        }
        if (obj["cashRegisterCapingFidPt"] != undefined) {
            this["cashRegisterCapingFidPt"] = new Number(obj["cashRegisterCapingFidPt"]).valueOf();
        }
        if (obj["cashRegisterApiKey"] != undefined) {
            this["cashRegisterApiKey"] = obj["cashRegisterApiKey"].toString();
        }
        if (obj["customerPrefix"] != undefined) {
            this["customerPrefix"] = obj["customerPrefix"].toString();
        }
        if (obj["globalCappingFidPoint"] != undefined) {
            this["globalCappingFidPoint"] = new Number(obj["globalCappingFidPoint"]).valueOf();
        }
        if (obj["disableEmbasment"] != undefined) {
            this["disableEmbasment"] = new Boolean(obj["disableEmbasment"]).valueOf();
        }
    }
}
exports.Model_service_celio_fid_admin = Model_service_celio_fid_admin;
