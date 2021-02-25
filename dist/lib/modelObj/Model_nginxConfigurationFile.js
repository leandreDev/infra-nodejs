"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_nginxConfigurationFile = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
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
                else if (value._bsontype && value._bsontype === 'ObjectID') {
                    return `${value}`;
                }
            });
        }
    }
}
exports.Model_nginxConfigurationFile = Model_nginxConfigurationFile;
