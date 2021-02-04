"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_mindsUp = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service minds up metier
*/
class Model_service_mindsUp extends Model_service_1.Model_service {
    /**
      service minds up metier
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_mindsUp";
        if (obj["urlApi"] != undefined) {
            this["urlApi"] = obj["urlApi"].toString();
        }
        if (obj["urlSsoApi"] != undefined) {
            this["urlSsoApi"] = obj["urlSsoApi"].toString();
        }
        if (obj["urlLicenceService"] != undefined) {
            this["urlLicenceService"] = obj["urlLicenceService"].toString();
        }
        if (obj["urlInfraBdd"] != undefined) {
            this["urlInfraBdd"] = obj["urlInfraBdd"].toString();
        }
        if (obj["urlMailerService"] != undefined) {
            this["urlMailerService"] = obj["urlMailerService"].toString();
        }
        if (obj["urlPdfrip"] != undefined) {
            this["urlPdfrip"] = obj["urlPdfrip"].toString();
        }
        if (obj["reportUrl"] != undefined) {
            this["reportUrl"] = obj["reportUrl"].toString();
        }
        if (obj["urlFsoService"] != undefined) {
            this["urlFsoService"] = obj["urlFsoService"].toString();
        }
        if (obj["applicationClienteConfig"] != undefined) {
            if (_.isString(obj["applicationClienteConfig"])) {
                this["applicationClienteConfig"] = obj["applicationClienteConfig"];
            }
            else if (obj["applicationClienteConfig"]._id) {
                this["applicationClienteConfig"] = obj["applicationClienteConfig"]._id;
            }
        }
        if (obj["applicationAdminConfig"] != undefined) {
            if (_.isString(obj["applicationAdminConfig"])) {
                this["applicationAdminConfig"] = obj["applicationAdminConfig"];
            }
            else if (obj["applicationAdminConfig"]._id) {
                this["applicationAdminConfig"] = obj["applicationAdminConfig"]._id;
            }
        }
        if (obj["ftpConf"] != undefined) {
            if (obj["ftpConf"]._class) {
                this["ftpConf"] = new Index[obj["ftpConf"]._class](obj["ftpConf"]);
            }
            else {
                this["ftpConf"] = new Index["ftpsConfig"](obj["ftpConf"]);
            }
        }
        if (obj["appId"] != undefined) {
            if (_.isString(obj["appId"])) {
                this["appId"] = obj["appId"];
            }
            else if (obj["appId"]._id) {
                this["appId"] = obj["appId"]._id;
            }
        }
        if (obj["adminAppId"] != undefined) {
            if (_.isString(obj["adminAppId"])) {
                this["adminAppId"] = obj["adminAppId"];
            }
            else if (obj["adminAppId"]._id) {
                this["adminAppId"] = obj["adminAppId"]._id;
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
        if (obj["adminLicenceStoreId"] != undefined) {
            this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString();
        }
        if (obj["emailSenderName"] != undefined) {
            this["emailSenderName"] = obj["emailSenderName"].toString();
        }
        if (obj["emailSenderEmail"] != undefined) {
            this["emailSenderEmail"] = obj["emailSenderEmail"].toString();
        }
        if (obj["mailIRelance360"] != undefined) {
            if (_.isString(obj["mailIRelance360"])) {
                this["mailIRelance360"] = obj["mailIRelance360"];
            }
            else if (obj["mailIRelance360"]._id) {
                this["mailIRelance360"] = obj["mailIRelance360"]._id;
            }
        }
        if (obj["mailInvitation360"] != undefined) {
            if (_.isString(obj["mailInvitation360"])) {
                this["mailInvitation360"] = obj["mailInvitation360"];
            }
            else if (obj["mailInvitation360"]._id) {
                this["mailInvitation360"] = obj["mailInvitation360"]._id;
            }
        }
        if (obj["mailInvitationCampaign360"] != undefined) {
            if (_.isString(obj["mailInvitationCampaign360"])) {
                this["mailInvitationCampaign360"] = obj["mailInvitationCampaign360"];
            }
            else if (obj["mailInvitationCampaign360"]._id) {
                this["mailInvitationCampaign360"] = obj["mailInvitationCampaign360"]._id;
            }
        }
        if (obj["mailCreation360"] != undefined) {
            if (_.isString(obj["mailCreation360"])) {
                this["mailCreation360"] = obj["mailCreation360"];
            }
            else if (obj["mailCreation360"]._id) {
                this["mailCreation360"] = obj["mailCreation360"]._id;
            }
        }
        if (obj["appName"] != undefined) {
            this["appName"] = obj["appName"].toString();
        }
        if (obj["appUrl"] != undefined) {
            this["appUrl"] = obj["appUrl"].toString();
        }
        if (obj["mailInquiry360UserResponseInfo"] != undefined) {
            if (_.isString(obj["mailInquiry360UserResponseInfo"])) {
                this["mailInquiry360UserResponseInfo"] = obj["mailInquiry360UserResponseInfo"];
            }
            else if (obj["mailInquiry360UserResponseInfo"]._id) {
                this["mailInquiry360UserResponseInfo"] = obj["mailInquiry360UserResponseInfo"]._id;
            }
        }
        if (obj["mailInquiry360UserResponse"] != undefined) {
            if (_.isString(obj["mailInquiry360UserResponse"])) {
                this["mailInquiry360UserResponse"] = obj["mailInquiry360UserResponse"];
            }
            else if (obj["mailInquiry360UserResponse"]._id) {
                this["mailInquiry360UserResponse"] = obj["mailInquiry360UserResponse"]._id;
            }
        }
        if (obj["langUrl"] != undefined && obj["langUrl"] != null && _.isArray(obj["langUrl"])) {
            this["langUrl"] = obj["langUrl"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
    }
}
exports.Model_service_mindsUp = Model_service_mindsUp;
//# sourceMappingURL=Model_service_mindsUp.js.map