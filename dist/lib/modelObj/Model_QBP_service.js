"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_QBP_service = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service métier de QBP
*/
class Model_QBP_service extends Model_service_1.Model_service {
    /**
      service métier de QBP
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "QBP_service";
        if (obj["QbpBddUrl"] != undefined) {
            this["QbpBddUrl"] = obj["QbpBddUrl"].toString();
        }
        if (obj["ssoApiUrl"] != undefined) {
            this["ssoApiUrl"] = obj["ssoApiUrl"].toString();
        }
        if (obj["licenceApiUrl"] != undefined) {
            this["licenceApiUrl"] = obj["licenceApiUrl"].toString();
        }
        if (obj["sendgridApiUrl"] != undefined) {
            this["sendgridApiUrl"] = obj["sendgridApiUrl"].toString();
        }
        if (obj["appId"] != undefined) {
            if (_.isString(obj["appId"])) {
                this["appId"] = obj["appId"];
            }
            else if (obj["appId"]._id) {
                this["appId"] = obj["appId"]._id;
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
        if (obj["licenceStoreId"] != undefined) {
            this["licenceStoreId"] = obj["licenceStoreId"].toString();
        }
        if (obj["ssoBddUrl"] != undefined) {
            this["ssoBddUrl"] = obj["ssoBddUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            this["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            this["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["sellerAppId"] != undefined) {
            this["sellerAppId"] = obj["sellerAppId"].toString();
        }
        if (obj["sellerLicenceStoreId"] != undefined) {
            this["sellerLicenceStoreId"] = obj["sellerLicenceStoreId"].toString();
        }
        if (obj["adminAppId"] != undefined) {
            this["adminAppId"] = obj["adminAppId"].toString();
        }
        if (obj["adminLicenceStoreId"] != undefined) {
            this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString();
        }
        if (obj["infraBddUrl"] != undefined) {
            this["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["sellerSso_Client_template"] != undefined) {
            if (_.isString(obj["sellerSso_Client_template"])) {
                this["sellerSso_Client_template"] = obj["sellerSso_Client_template"];
            }
            else if (obj["sellerSso_Client_template"]._id) {
                this["sellerSso_Client_template"] = obj["sellerSso_Client_template"]._id;
            }
        }
        if (obj["sellerEndClientTemplate"] != undefined) {
            if (_.isString(obj["sellerEndClientTemplate"])) {
                this["sellerEndClientTemplate"] = obj["sellerEndClientTemplate"];
            }
            else if (obj["sellerEndClientTemplate"]._id) {
                this["sellerEndClientTemplate"] = obj["sellerEndClientTemplate"]._id;
            }
        }
        if (obj["sellerAppInstanceTemplate"] != undefined) {
            if (_.isString(obj["sellerAppInstanceTemplate"])) {
                this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"];
            }
            else if (obj["sellerAppInstanceTemplate"]._id) {
                this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"]._id;
            }
        }
    }
}
exports.Model_QBP_service = Model_QBP_service;
//# sourceMappingURL=Model_QBP_service.js.map