"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_comptoireOr = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service_comptoireOr
*/
class Model_service_comptoireOr extends Model_service_1.Model_service {
    /**
      service_comptoireOr
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_comptoireOr";
        if (obj["bddApiUrl"] != undefined) {
            this["bddApiUrl"] = obj["bddApiUrl"].toString();
        }
        if (obj["ssoApiUrl"] != undefined) {
            this["ssoApiUrl"] = obj["ssoApiUrl"].toString();
        }
        if (obj["licenceApiUrl"] != undefined) {
            this["licenceApiUrl"] = obj["licenceApiUrl"].toString();
        }
        if (obj["infraBddUrl"] != undefined) {
            this["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["adminConfId"] != undefined) {
            if (_.isString(obj["adminConfId"])) {
                this["adminConfId"] = obj["adminConfId"];
            }
            else if (obj["adminConfId"]._id) {
                this["adminConfId"] = obj["adminConfId"]._id;
            }
        }
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                this["end_client"] = obj["end_client"];
            }
            else if (obj["end_client"]._id) {
                this["end_client"] = obj["end_client"]._id;
            }
        }
        if (obj["adminLicenceStoreId"] != undefined) {
            this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString();
        }
        if (obj["adminAppId"] != undefined) {
            if (_.isString(obj["adminAppId"])) {
                this["adminAppId"] = obj["adminAppId"];
            }
            else if (obj["adminAppId"]._id) {
                this["adminAppId"] = obj["adminAppId"]._id;
            }
        }
        if (obj["sendgridApiUrl"] != undefined) {
            this["sendgridApiUrl"] = obj["sendgridApiUrl"].toString();
        }
        if (obj["senderName"] != undefined) {
            this["senderName"] = obj["senderName"].toString();
        }
        if (obj["senderEmail"] != undefined) {
            this["senderEmail"] = obj["senderEmail"].toString();
        }
        if (obj["transactionEmailTemplate"] != undefined) {
            if (_.isString(obj["transactionEmailTemplate"])) {
                this["transactionEmailTemplate"] = obj["transactionEmailTemplate"];
            }
            else if (obj["transactionEmailTemplate"]._id) {
                this["transactionEmailTemplate"] = obj["transactionEmailTemplate"]._id;
            }
        }
    }
}
exports.Model_service_comptoireOr = Model_service_comptoireOr;
//# sourceMappingURL=Model_service_comptoireOr.js.map