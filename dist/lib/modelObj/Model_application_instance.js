"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
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
        }
        if (obj["configuration"] != undefined) {
            if (_.isString(obj["configuration"])) {
                this["configuration"] = obj["configuration"];
            }
            else if (obj["configuration"]._id) {
                this["configuration"] = obj["configuration"]._id;
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
        if (obj["oidc_client"] != undefined) {
            if (_.isString(obj["oidc_client"])) {
                this["oidc_client"] = obj["oidc_client"];
            }
            else if (obj["oidc_client"]._id) {
                this["oidc_client"] = obj["oidc_client"]._id;
            }
        }
        if (obj["css"] != undefined) {
            this["css"] = obj["css"].toString();
        }
        if (obj["public_data"] != undefined) {
            this["public_data"] = obj["public_data"];
        }
    }
}
exports.Model_application_instance = Model_application_instance;
//# sourceMappingURL=Model_application_instance.js.map