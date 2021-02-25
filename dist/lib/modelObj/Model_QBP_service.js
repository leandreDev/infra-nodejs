"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_QBP_service = void 0;
const _ = require("lodash");
const Index = require("./Index");
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
            if (_.isString(obj["sellerAppId"])) {
                this["sellerAppId"] = obj["sellerAppId"];
            }
            else if (obj["sellerAppId"]._id) {
                this["sellerAppId"] = obj["sellerAppId"]._id;
            }
        }
        if (obj["sellerLicenceStoreId"] != undefined) {
            this["sellerLicenceStoreId"] = obj["sellerLicenceStoreId"].toString();
        }
        if (obj["adminAppId"] != undefined) {
            if (_.isString(obj["adminAppId"])) {
                this["adminAppId"] = obj["adminAppId"];
            }
            else if (obj["adminAppId"]._id) {
                this["adminAppId"] = obj["adminAppId"]._id;
            }
        }
        if (obj["adminLicenceStoreId"] != undefined) {
            this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString();
        }
        if (obj["infraBddUrl"] != undefined) {
            this["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["sellerSso_Client_template"] != undefined) {
            this["sellerSso_Client_template"] = obj["sellerSso_Client_template"].toString();
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
        if (obj["mangoConf"] != undefined) {
            if (obj["mangoConf"]._class) {
                this["mangoConf"] = new Index[obj["mangoConf"]._class](obj["mangoConf"]);
            }
            else {
                this["mangoConf"] = new Index["MangoConf"](obj["mangoConf"]);
            }
        }
    }
}
exports.Model_QBP_service = Model_QBP_service;
