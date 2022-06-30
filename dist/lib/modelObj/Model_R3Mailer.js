"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_R3Mailer = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  configurationpour l'envoie d emails R3
*/
class Model_R3Mailer extends utils_1.Base {
    /**
      configurationpour l'envoie d emails R3
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "R3Mailer";
        if (obj["senderEMail"] != undefined) {
            this["senderEMail"] = obj["senderEMail"].toString();
        }
        if (obj["senderName"] != undefined) {
            this["senderName"] = obj["senderName"].toString();
        }
        if (obj["r3BaseUrl"] != undefined) {
            this["r3BaseUrl"] = obj["r3BaseUrl"].toString();
        }
        if (obj["r3SendgridApiUrl"] != undefined) {
            this["r3SendgridApiUrl"] = obj["r3SendgridApiUrl"].toString();
        }
        if (obj["r3ContactMail"] != undefined) {
            this["r3ContactMail"] = obj["r3ContactMail"].toString();
        }
        if (obj["r3_group_resset_password"] != undefined) {
            if (_.isString(obj["r3_group_resset_password"])) {
                this["r3_group_resset_password"] = obj["r3_group_resset_password"];
            }
            else if (obj["r3_group_resset_password"]._id) {
                this["r3_group_resset_password"] = obj["r3_group_resset_password"]._id;
            }
            else if (obj["r3_group_resset_password"]._bsontype && (obj["r3_group_resset_password"]._bsontype === 'ObjectID')) {
                this["r3_group_resset_password"] = obj["r3_group_resset_password"];
            }
        }
        if (obj["r3_group_welcome"] != undefined) {
            if (_.isString(obj["r3_group_welcome"])) {
                this["r3_group_welcome"] = obj["r3_group_welcome"];
            }
            else if (obj["r3_group_welcome"]._id) {
                this["r3_group_welcome"] = obj["r3_group_welcome"]._id;
            }
            else if (obj["r3_group_welcome"]._bsontype && (obj["r3_group_welcome"]._bsontype === 'ObjectID')) {
                this["r3_group_welcome"] = obj["r3_group_welcome"];
            }
        }
        if (obj["r3_contact_to_user"] != undefined) {
            if (_.isString(obj["r3_contact_to_user"])) {
                this["r3_contact_to_user"] = obj["r3_contact_to_user"];
            }
            else if (obj["r3_contact_to_user"]._id) {
                this["r3_contact_to_user"] = obj["r3_contact_to_user"]._id;
            }
            else if (obj["r3_contact_to_user"]._bsontype && (obj["r3_contact_to_user"]._bsontype === 'ObjectID')) {
                this["r3_contact_to_user"] = obj["r3_contact_to_user"];
            }
        }
        if (obj["r3_contact_to_r3"] != undefined) {
            if (_.isString(obj["r3_contact_to_r3"])) {
                this["r3_contact_to_r3"] = obj["r3_contact_to_r3"];
            }
            else if (obj["r3_contact_to_r3"]._id) {
                this["r3_contact_to_r3"] = obj["r3_contact_to_r3"]._id;
            }
            else if (obj["r3_contact_to_r3"]._bsontype && (obj["r3_contact_to_r3"]._bsontype === 'ObjectID')) {
                this["r3_contact_to_r3"] = obj["r3_contact_to_r3"];
            }
        }
        if (obj["R3_prescriptor_invitation"] != undefined) {
            if (_.isString(obj["R3_prescriptor_invitation"])) {
                this["R3_prescriptor_invitation"] = obj["R3_prescriptor_invitation"];
            }
            else if (obj["R3_prescriptor_invitation"]._id) {
                this["R3_prescriptor_invitation"] = obj["R3_prescriptor_invitation"]._id;
            }
            else if (obj["R3_prescriptor_invitation"]._bsontype && (obj["R3_prescriptor_invitation"]._bsontype === 'ObjectID')) {
                this["R3_prescriptor_invitation"] = obj["R3_prescriptor_invitation"];
            }
        }
        if (obj["R3_analisys_end_to_r3_and_partner"] != undefined) {
            if (_.isString(obj["R3_analisys_end_to_r3_and_partner"])) {
                this["R3_analisys_end_to_r3_and_partner"] = obj["R3_analisys_end_to_r3_and_partner"];
            }
            else if (obj["R3_analisys_end_to_r3_and_partner"]._id) {
                this["R3_analisys_end_to_r3_and_partner"] = obj["R3_analisys_end_to_r3_and_partner"]._id;
            }
            else if (obj["R3_analisys_end_to_r3_and_partner"]._bsontype && (obj["R3_analisys_end_to_r3_and_partner"]._bsontype === 'ObjectID')) {
                this["R3_analisys_end_to_r3_and_partner"] = obj["R3_analisys_end_to_r3_and_partner"];
            }
        }
        if (obj["R3_analisys_end_to_user"] != undefined) {
            if (_.isString(obj["R3_analisys_end_to_user"])) {
                this["R3_analisys_end_to_user"] = obj["R3_analisys_end_to_user"];
            }
            else if (obj["R3_analisys_end_to_user"]._id) {
                this["R3_analisys_end_to_user"] = obj["R3_analisys_end_to_user"]._id;
            }
            else if (obj["R3_analisys_end_to_user"]._bsontype && (obj["R3_analisys_end_to_user"]._bsontype === 'ObjectID')) {
                this["R3_analisys_end_to_user"] = obj["R3_analisys_end_to_user"];
            }
        }
        if (obj["R3_partner_admin_created"] != undefined) {
            if (_.isString(obj["R3_partner_admin_created"])) {
                this["R3_partner_admin_created"] = obj["R3_partner_admin_created"];
            }
            else if (obj["R3_partner_admin_created"]._id) {
                this["R3_partner_admin_created"] = obj["R3_partner_admin_created"]._id;
            }
            else if (obj["R3_partner_admin_created"]._bsontype && (obj["R3_partner_admin_created"]._bsontype === 'ObjectID')) {
                this["R3_partner_admin_created"] = obj["R3_partner_admin_created"];
            }
        }
    }
}
exports.Model_R3Mailer = Model_R3Mailer;
