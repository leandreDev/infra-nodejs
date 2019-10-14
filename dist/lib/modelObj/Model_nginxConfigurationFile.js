"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  description d'un fichier de configuration nginx
*/
class Model_nginxConfigurationFile extends utils_1.Base {
    /**
      description d'un fichier de configuration nginx
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "nginxConfigurationFile";
        if (obj["suffix"] != undefined) {
            this["suffix"] = obj["suffix"].toString();
        }
        if (obj["template"] != undefined) {
            this["template"] = obj["template"].toString();
        }
        if (obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])) {
            this["services"] = obj["services"].map((value) => {
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
exports.Model_nginxConfigurationFile = Model_nginxConfigurationFile;
//# sourceMappingURL=Model_nginxConfigurationFile.js.map