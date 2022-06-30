"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_boisdor_service = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service métier de boisdor
*/
class Model_boisdor_service extends Model_service_1.Model_service {
    /**
      service métier de boisdor
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "boisdor_service";
        if (obj["boisdorBddUrl"] != undefined) {
            this["boisdorBddUrl"] = obj["boisdorBddUrl"].toString();
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
            else if (obj["appId"]._bsontype && (obj["appId"]._bsontype === 'ObjectID')) {
                this["appId"] = obj["appId"];
            }
        }
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                this["end_client"] = obj["end_client"];
            }
            else if (obj["end_client"]._id) {
                this["end_client"] = obj["end_client"]._id;
            }
            else if (obj["end_client"]._bsontype && (obj["end_client"]._bsontype === 'ObjectID')) {
                this["end_client"] = obj["end_client"];
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
            else if (obj["sellerAppId"]._bsontype && (obj["sellerAppId"]._bsontype === 'ObjectID')) {
                this["sellerAppId"] = obj["sellerAppId"];
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
            else if (obj["adminAppId"]._bsontype && (obj["adminAppId"]._bsontype === 'ObjectID')) {
                this["adminAppId"] = obj["adminAppId"];
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
            else if (obj["sellerEndClientTemplate"]._bsontype && (obj["sellerEndClientTemplate"]._bsontype === 'ObjectID')) {
                this["sellerEndClientTemplate"] = obj["sellerEndClientTemplate"];
            }
        }
        if (obj["sellerAppInstanceTemplate"] != undefined) {
            if (_.isString(obj["sellerAppInstanceTemplate"])) {
                this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"];
            }
            else if (obj["sellerAppInstanceTemplate"]._id) {
                this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"]._id;
            }
            else if (obj["sellerAppInstanceTemplate"]._bsontype && (obj["sellerAppInstanceTemplate"]._bsontype === 'ObjectID')) {
                this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"];
            }
        }
        if (obj["resetPasswordRedirect"] != undefined) {
            this["resetPasswordRedirect"] = obj["resetPasswordRedirect"].toString();
        }
        if (obj["sendgrid_conf"] != undefined) {
            if (obj["sendgrid_conf"]._class) {
                this["sendgrid_conf"] = new Index[obj["sendgrid_conf"]._class](obj["sendgrid_conf"]);
            }
            else {
                this["sendgrid_conf"] = new Index["bois_dor_mailer"](obj["sendgrid_conf"]);
            }
        }
    }
}
exports.Model_boisdor_service = Model_boisdor_service;
