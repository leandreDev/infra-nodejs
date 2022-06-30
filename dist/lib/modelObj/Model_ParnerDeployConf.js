"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_ParnerDeployConf = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  configuration du déploiement de partenaire
*/
class Model_ParnerDeployConf extends utils_1.Base {
    /**
      configuration du déploiement de partenaire
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "ParnerDeployConf";
        if (obj["adminUrl"] != undefined) {
            this["adminUrl"] = obj["adminUrl"].toString();
        }
        if (obj["landingPageUrl"] != undefined) {
            this["landingPageUrl"] = obj["landingPageUrl"].toString();
        }
        if (obj["appClientTemplateId"] != undefined) {
            if (_.isString(obj["appClientTemplateId"])) {
                this["appClientTemplateId"] = obj["appClientTemplateId"];
            }
            else if (obj["appClientTemplateId"]._id) {
                this["appClientTemplateId"] = obj["appClientTemplateId"]._id;
            }
            else if (obj["appClientTemplateId"]._bsontype && (obj["appClientTemplateId"]._bsontype === 'ObjectID')) {
                this["appClientTemplateId"] = obj["appClientTemplateId"];
            }
        }
        if (obj["appAdminTemplateId"] != undefined) {
            if (_.isString(obj["appAdminTemplateId"])) {
                this["appAdminTemplateId"] = obj["appAdminTemplateId"];
            }
            else if (obj["appAdminTemplateId"]._id) {
                this["appAdminTemplateId"] = obj["appAdminTemplateId"]._id;
            }
            else if (obj["appAdminTemplateId"]._bsontype && (obj["appAdminTemplateId"]._bsontype === 'ObjectID')) {
                this["appAdminTemplateId"] = obj["appAdminTemplateId"];
            }
        }
        if (obj["endClientTemplateId"] != undefined) {
            if (_.isString(obj["endClientTemplateId"])) {
                this["endClientTemplateId"] = obj["endClientTemplateId"];
            }
            else if (obj["endClientTemplateId"]._id) {
                this["endClientTemplateId"] = obj["endClientTemplateId"]._id;
            }
            else if (obj["endClientTemplateId"]._bsontype && (obj["endClientTemplateId"]._bsontype === 'ObjectID')) {
                this["endClientTemplateId"] = obj["endClientTemplateId"];
            }
        }
        if (obj["oidcTemplateId"] != undefined) {
            if (_.isString(obj["oidcTemplateId"])) {
                this["oidcTemplateId"] = obj["oidcTemplateId"];
            }
            else if (obj["oidcTemplateId"]._id) {
                this["oidcTemplateId"] = obj["oidcTemplateId"]._id;
            }
            else if (obj["oidcTemplateId"]._bsontype && (obj["oidcTemplateId"]._bsontype === 'ObjectID')) {
                this["oidcTemplateId"] = obj["oidcTemplateId"];
            }
        }
    }
}
exports.Model_ParnerDeployConf = Model_ParnerDeployConf;
