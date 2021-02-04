"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application = void 0;
const utils_1 = require("utils");
/**
  liste des applications
*/
class Model_application extends utils_1.Base {
    /**
      liste des applications
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["depot"] != undefined) {
            this["depot"] = obj["depot"].toString();
        }
    }
}
exports.Model_application = Model_application;
//# sourceMappingURL=Model_application.js.map