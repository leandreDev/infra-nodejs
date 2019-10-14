"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_service_nginxConfigurator_1 = require("./Model_service_nginxConfigurator");
/**
  configuration d'un service nginx multi configuration
*/
class Model_service_nginxMultiConfigurator extends Model_service_nginxConfigurator_1.Model_service_nginxConfigurator {
    /**
      configuration d'un service nginx multi configuration
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_nginxMultiConfigurator";
        if (obj["nginxUser"] != undefined) {
            this["nginxUser"] = obj["nginxUser"].toString();
        }
        if (obj["serviceUrl"] != undefined) {
            this["serviceUrl"] = obj["serviceUrl"].toString();
        }
        if (obj["clientUrl"] != undefined) {
            this["clientUrl"] = obj["clientUrl"].toString();
        }
        if (obj["appInstanceUrl"] != undefined) {
            this["appInstanceUrl"] = obj["appInstanceUrl"].toString();
        }
        if (obj["appUrl"] != undefined) {
            this["appUrl"] = obj["appUrl"].toString();
        }
        if (obj["configurationFile"] != undefined && obj["configurationFile"] != null && _.isArray(obj["configurationFile"])) {
            this["configurationFile"] = obj["configurationFile"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["nginxConfigurationFile"](value);
                }
            });
        }
        if (obj["confApplication"] != undefined && obj["confApplication"] != null && _.isArray(obj["confApplication"])) {
            this["confApplication"] = obj["confApplication"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["nginxConfigurationFileApp"](value);
                }
            });
        }
    }
}
exports.Model_service_nginxMultiConfigurator = Model_service_nginxMultiConfigurator;
//# sourceMappingURL=Model_service_nginxMultiConfigurator.js.map