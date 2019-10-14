"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service passerelle d'un package scorm vers l'interne
*/
class Model_Service_scorm_gateway extends Model_service_1.Model_service {
    /**
      service passerelle d'un package scorm vers l'interne
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "Service_scorm_gateway";
        if (obj["privateKey"] != undefined) {
            this["privateKey"] = obj["privateKey"].toString();
        }
        if (obj["endClientId"] != undefined) {
            if (_.isString(obj["endClientId"])) {
                this["endClientId"] = obj["endClientId"];
            }
            else if (obj["endClientId"]._id) {
                this["endClientId"] = obj["endClientId"]._id;
            }
        }
        if (obj["signinUrl"] != undefined) {
            this["signinUrl"] = obj["signinUrl"].toString();
        }
        if (obj["licenceUrl"] != undefined) {
            this["licenceUrl"] = obj["licenceUrl"].toString();
        }
        if (obj["templateUser"] != undefined) {
            this["templateUser"] = obj["templateUser"];
        }
        if (obj["templateProfileUser"] != undefined) {
            this["templateProfileUser"] = obj["templateProfileUser"];
        }
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
    }
}
exports.Model_Service_scorm_gateway = Model_Service_scorm_gateway;
//# sourceMappingURL=Model_Service_scorm_gateway.js.map