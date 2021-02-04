"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_periodicalDistrution_day = void 0;
const Model_periodicalDistrution_1 = require("./Model_periodicalDistrution");
/**
  journée autorisé
*/
class Model_periodicalDistrution_day extends Model_periodicalDistrution_1.Model_periodicalDistrution {
    /**
      journée autorisé
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "periodicalDistrution_day";
        if (obj["lundi"] != undefined) {
            this["lundi"] = new Boolean(obj["lundi"]).valueOf();
        }
        if (obj["mardi"] != undefined) {
            this["mardi"] = new Boolean(obj["mardi"]).valueOf();
        }
        if (obj["mercredi"] != undefined) {
            this["mercredi"] = new Boolean(obj["mercredi"]).valueOf();
        }
        if (obj["jeudi"] != undefined) {
            this["jeudi"] = new Boolean(obj["jeudi"]).valueOf();
        }
        if (obj["vendredi"] != undefined) {
            this["vendredi"] = new Boolean(obj["vendredi"]).valueOf();
        }
        if (obj["samedi"] != undefined) {
            this["samedi"] = new Boolean(obj["samedi"]).valueOf();
        }
        if (obj["dimanche"] != undefined) {
            this["dimanche"] = new Boolean(obj["dimanche"]).valueOf();
        }
    }
}
exports.Model_periodicalDistrution_day = Model_periodicalDistrution_day;
//# sourceMappingURL=Model_periodicalDistrution_day.js.map