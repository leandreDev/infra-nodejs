"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_infra_admin = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  administration de l'infra
*/
class Model_service_infra_admin extends Model_service_1.Model_service {
    /**
      administration de l'infra
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_infra_admin";
        if (obj["ssoBdUrl"] != undefined) {
            this["ssoBdUrl"] = obj["ssoBdUrl"].toString();
        }
        if (obj["infraBdUrl"] != undefined) {
            this["infraBdUrl"] = obj["infraBdUrl"].toString();
        }
        if (obj["platformBdUrl"] != undefined) {
            this["platformBdUrl"] = obj["platformBdUrl"].toString();
        }
        if (obj["service_nginxMultiConfiguratorId"] != undefined) {
            if (_.isString(obj["service_nginxMultiConfiguratorId"])) {
                this["service_nginxMultiConfiguratorId"] = obj["service_nginxMultiConfiguratorId"];
            }
            else if (obj["service_nginxMultiConfiguratorId"]._id) {
                this["service_nginxMultiConfiguratorId"] = obj["service_nginxMultiConfiguratorId"]._id;
            }
        }
        if (obj["nginxApplicationSuffix"] != undefined) {
            this["nginxApplicationSuffix"] = obj["nginxApplicationSuffix"].toString();
        }
    }
}
exports.Model_service_infra_admin = Model_service_infra_admin;
//# sourceMappingURL=Model_service_infra_admin.js.map