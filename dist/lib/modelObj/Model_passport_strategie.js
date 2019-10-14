"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
/**
  configuration d'une stratégie passport à déployer sur le sso
*/
class Model_passport_strategie extends utils_1.Base {
    /**
      configuration d'une stratégie passport à déployer sur le sso
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["autoCreate"] != undefined) {
            this["autoCreate"] = new Boolean(obj["autoCreate"]).valueOf();
        }
        if (obj["autoLoginWMail"] != undefined) {
            this["autoLoginWMail"] = new Boolean(obj["autoLoginWMail"]).valueOf();
        }
    }
}
exports.Model_passport_strategie = Model_passport_strategie;
//# sourceMappingURL=Model_passport_strategie.js.map