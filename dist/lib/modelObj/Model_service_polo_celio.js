"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_polo_celio = void 0;
const Model_service_1 = require("./Model_service");
/**
  service de tirage au sort de polo
*/
class Model_service_polo_celio extends Model_service_1.Model_service {
    /**
      service de tirage au sort de polo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_polo_celio";
        /**
  nombre maximum de gagnan
  */
        this["maxNumberOfWinner"] = 500;
        if (obj["bdd_url"] != undefined) {
            this["bdd_url"] = obj["bdd_url"].toString();
        }
        if (obj["maxNumberOfWinner"] != undefined) {
            this["maxNumberOfWinner"] = new Number(obj["maxNumberOfWinner"]).valueOf();
        }
        if (obj["drawStat"] != undefined) {
            this["drawStat"] = new Number(obj["drawStat"]).valueOf();
        }
        if (obj["bigDrawStat"] != undefined) {
            this["bigDrawStat"] = new Number(obj["bigDrawStat"]).valueOf();
        }
    }
}
exports.Model_service_polo_celio = Model_service_polo_celio;
//# sourceMappingURL=Model_service_polo_celio.js.map