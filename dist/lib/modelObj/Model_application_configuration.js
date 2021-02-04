"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  c'est la configuration d'une application
*/
class Model_application_configuration extends utils_1.Base {
    /**
      c'est la configuration d'une application
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
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
        if (obj["appName"] != undefined) {
            this["appName"] = obj["appName"].toString();
        }
    }
}
exports.Model_application_configuration = Model_application_configuration;
//# sourceMappingURL=Model_application_configuration.js.map