"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_certificat = void 0;
const utils_1 = require("utils");
/**
  certificat
*/
class Model_certificat extends utils_1.Base {
    /**
      certificat
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "certificat";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
    }
}
exports.Model_certificat = Model_certificat;
//# sourceMappingURL=Model_certificat.js.map