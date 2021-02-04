"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_rsa = void 0;
const Model_certificat_1 = require("./Model_certificat");
/**
  certificat RSA
*/
class Model_rsa extends Model_certificat_1.Model_certificat {
    /**
      certificat RSA
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "rsa";
        if (obj["kty"] != undefined) {
            this["kty"] = obj["kty"].toString();
        }
        if (obj["use"] != undefined) {
            this["use"] = obj["use"].toString();
        }
        if (obj["d"] != undefined) {
            this["d"] = obj["d"].toString();
        }
        if (obj["dp"] != undefined) {
            this["dp"] = obj["dp"].toString();
        }
        if (obj["dq"] != undefined) {
            this["dq"] = obj["dq"].toString();
        }
        if (obj["e"] != undefined) {
            this["e"] = obj["e"].toString();
        }
        if (obj["n"] != undefined) {
            this["n"] = obj["n"].toString();
        }
        if (obj["p"] != undefined) {
            this["p"] = obj["p"].toString();
        }
        if (obj["q"] != undefined) {
            this["q"] = obj["q"].toString();
        }
        if (obj["qi"] != undefined) {
            this["qi"] = obj["qi"].toString();
        }
    }
}
exports.Model_rsa = Model_rsa;
//# sourceMappingURL=Model_rsa.js.map