"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_instance = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  c'est le couple application configuration
*/
class Model_application_instance extends utils_1.Base {
    /**
      c'est le couple application configuration
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_instance";
        /**
  port de publication
  */
        this["port"] = 80;
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["application"] != undefined) {
            if (_.isString(obj["application"])) {
                this["application"] = obj["application"];
            }
            else if (obj["application"]._id) {
                this["application"] = obj["application"]._id;
            }
            else if (obj["application"]._bsontype && (obj["application"]._bsontype === 'ObjectID')) {
                this["application"] = obj["application"];
            }
        }
        if (obj["configuration"] != undefined) {
            if (_.isString(obj["configuration"])) {
                this["configuration"] = obj["configuration"];
            }
            else if (obj["configuration"]._id) {
                this["configuration"] = obj["configuration"]._id;
            }
            else if (obj["configuration"]._bsontype && (obj["configuration"]._bsontype === 'ObjectID')) {
                this["configuration"] = obj["configuration"];
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
        if (obj["oidc_client"] != undefined) {
            if (_.isString(obj["oidc_client"])) {
                this["oidc_client"] = obj["oidc_client"];
            }
            else if (obj["oidc_client"]._id) {
                this["oidc_client"] = obj["oidc_client"]._id;
            }
            else if (obj["oidc_client"]._bsontype && (obj["oidc_client"]._bsontype === 'ObjectID')) {
                this["oidc_client"] = obj["oidc_client"];
            }
        }
        if (obj["css"] != undefined) {
            this["css"] = obj["css"].toString();
        }
        if (obj["public_data"] != undefined) {
            this["public_data"] = obj["public_data"];
        }
        if (obj["port"] != undefined) {
            this["port"] = new Number(obj["port"]).valueOf();
        }
    }
}
exports.Model_application_instance = Model_application_instance;
