"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_QbpFeaturesConfiguration = void 0;
const utils_1 = require("@leandredev/utils");
/**
  liste de functionalites pouvant etre actives ou desactives
*/
class Model_QbpFeaturesConfiguration extends utils_1.Base {
    /**
      liste de functionalites pouvant etre actives ou desactives
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "QbpFeaturesConfiguration";
        /**
  determine se le payement par virement bancaire est active ou non
  */
        this["bankWire"] = false;
        /**
  Determine si l option floaPay est activer ou non
  */
        this["floaPay"] = false;
        if (obj["bankWire"] != undefined) {
            this["bankWire"] = new Boolean(obj["bankWire"]).valueOf();
        }
        if (obj["floaPay"] != undefined) {
            this["floaPay"] = new Boolean(obj["floaPay"]).valueOf();
        }
        if (obj["searchByModel"] != undefined) {
            this["searchByModel"] = new Boolean(obj["searchByModel"]).valueOf();
        }
    }
}
exports.Model_QbpFeaturesConfiguration = Model_QbpFeaturesConfiguration;
