"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_DCBMMailer = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  configuration pour l'envoie d emails DCBM
*/
class Model_DCBMMailer extends utils_1.Base {
    /**
      configuration pour l'envoie d emails DCBM
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "DCBMMailer";
        if (obj["senderEMail"] != undefined) {
            this["senderEMail"] = obj["senderEMail"].toString();
        }
        if (obj["senderName"] != undefined) {
            this["senderName"] = obj["senderName"].toString();
        }
        if (obj["dcbmBaseUrl"] != undefined) {
            this["dcbmBaseUrl"] = obj["dcbmBaseUrl"].toString();
        }
        if (obj["dcbmSendgridApiUrl"] != undefined) {
            this["dcbmSendgridApiUrl"] = obj["dcbmSendgridApiUrl"].toString();
        }
        if (obj["dcbmContactMail"] != undefined) {
            this["dcbmContactMail"] = obj["dcbmContactMail"].toString();
        }
        if (obj["dcbm_group_resset_password"] != undefined) {
            if (_.isString(obj["dcbm_group_resset_password"])) {
                this["dcbm_group_resset_password"] = obj["dcbm_group_resset_password"];
            }
            else if (obj["dcbm_group_resset_password"]._id) {
                this["dcbm_group_resset_password"] = obj["dcbm_group_resset_password"]._id;
            }
            else if (obj["dcbm_group_resset_password"]._bsontype && (obj["dcbm_group_resset_password"]._bsontype === 'ObjectID')) {
                this["dcbm_group_resset_password"] = obj["dcbm_group_resset_password"];
            }
        }
        if (obj["dcbm_group_welcome"] != undefined) {
            if (_.isString(obj["dcbm_group_welcome"])) {
                this["dcbm_group_welcome"] = obj["dcbm_group_welcome"];
            }
            else if (obj["dcbm_group_welcome"]._id) {
                this["dcbm_group_welcome"] = obj["dcbm_group_welcome"]._id;
            }
            else if (obj["dcbm_group_welcome"]._bsontype && (obj["dcbm_group_welcome"]._bsontype === 'ObjectID')) {
                this["dcbm_group_welcome"] = obj["dcbm_group_welcome"];
            }
        }
        if (obj["dcbm_contact_to_user"] != undefined) {
            if (_.isString(obj["dcbm_contact_to_user"])) {
                this["dcbm_contact_to_user"] = obj["dcbm_contact_to_user"];
            }
            else if (obj["dcbm_contact_to_user"]._id) {
                this["dcbm_contact_to_user"] = obj["dcbm_contact_to_user"]._id;
            }
            else if (obj["dcbm_contact_to_user"]._bsontype && (obj["dcbm_contact_to_user"]._bsontype === 'ObjectID')) {
                this["dcbm_contact_to_user"] = obj["dcbm_contact_to_user"];
            }
        }
        if (obj["dcbm_contact_to_dcbm"] != undefined) {
            if (_.isString(obj["dcbm_contact_to_dcbm"])) {
                this["dcbm_contact_to_dcbm"] = obj["dcbm_contact_to_dcbm"];
            }
            else if (obj["dcbm_contact_to_dcbm"]._id) {
                this["dcbm_contact_to_dcbm"] = obj["dcbm_contact_to_dcbm"]._id;
            }
            else if (obj["dcbm_contact_to_dcbm"]._bsontype && (obj["dcbm_contact_to_dcbm"]._bsontype === 'ObjectID')) {
                this["dcbm_contact_to_dcbm"] = obj["dcbm_contact_to_dcbm"];
            }
        }
        if (obj["dcbm_group_welcome_admin_templateId"] != undefined) {
            if (_.isString(obj["dcbm_group_welcome_admin_templateId"])) {
                this["dcbm_group_welcome_admin_templateId"] = obj["dcbm_group_welcome_admin_templateId"];
            }
            else if (obj["dcbm_group_welcome_admin_templateId"]._id) {
                this["dcbm_group_welcome_admin_templateId"] = obj["dcbm_group_welcome_admin_templateId"]._id;
            }
            else if (obj["dcbm_group_welcome_admin_templateId"]._bsontype && (obj["dcbm_group_welcome_admin_templateId"]._bsontype === 'ObjectID')) {
                this["dcbm_group_welcome_admin_templateId"] = obj["dcbm_group_welcome_admin_templateId"];
            }
        }
    }
}
exports.Model_DCBMMailer = Model_DCBMMailer;
