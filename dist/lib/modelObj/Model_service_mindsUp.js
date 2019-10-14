"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            if (obj._class) {
                this["ftpConf"] = new Index[obj._class](obj["ftpConf"]);
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
        if (obj["urlMailerService"] != undefined) {
            this["urlMailerService"] = obj["urlMailerService"].toString();
        }
        if (obj["mailInvitation360"] != undefined) {
            if (_.isString(obj["mailInvitation360"])) {
                this["mailInvitation360"] = obj["mailInvitation360"];
            }
            else if (obj["mailInvitation360"]._id) {
                this["mailInvitation360"] = obj["mailInvitation360"]._id;
            }
        }
        if (obj["mailIRelance360"] != undefined) {
            if (_.isString(obj["mailIRelance360"])) {
                this["mailIRelance360"] = obj["mailIRelance360"];
            }
            else if (obj["mailIRelance360"]._id) {
                this["mailIRelance360"] = obj["mailIRelance360"]._id;
            }
        }
        if (obj["emailSenderName"] != undefined) {
            this["emailSenderName"] = obj["emailSenderName"].toString();
        }
        if (obj["emailSenderEmail"] != undefined) {
            this["emailSenderEmail"] = obj["emailSenderEmail"].toString();
        }
        if (obj["urlFsoService"] != undefined) {
            this["urlFsoService"] = obj["urlFsoService"].toString();
        }
        if (obj["mailInvitationCampaign360"] != undefined) {
            if (_.isString(obj["mailInvitationCampaign360"])) {
                this["mailInvitationCampaign360"] = obj["mailInvitationCampaign360"];
            }
            else if (obj["mailInvitationCampaign360"]._id) {
                this["mailInvitationCampaign360"] = obj["mailInvitationCampaign360"]._id;
            }
        }
    }
}
exports.Model_service_mindsUp = Model_service_mindsUp;
//# sourceMappingURL=Model_service_mindsUp.js.map