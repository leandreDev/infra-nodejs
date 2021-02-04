"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_nginxConfigurationFileApp = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  description d'un fichier de configuration nginx
*/
class Model_nginxConfigurationFileApp extends utils_1.Base {
    /**
      description d'un fichier de configuration nginx
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "nginxConfigurationFileApp";
        if (obj["suffix"] != undefined) {
            this["suffix"] = obj["suffix"].toString();
        }
        if (obj["template"] != undefined) {
            this["template"] = obj["template"].toString();
        }
        if (obj["applications"] != undefined && obj["applications"] != null && _.isArray(obj["applications"])) {
            this["applications"] = obj["applications"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["clients"] != undefined && obj["clients"] != null && _.isArray(obj["clients"])) {
            this["clients"] = obj["clients"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
    }
}
exports.Model_nginxConfigurationFileApp = Model_nginxConfigurationFileApp;
//# sourceMappingURL=Model_nginxConfigurationFileApp.js.map