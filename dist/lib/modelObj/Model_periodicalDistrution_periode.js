"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_periodicalDistrution_periode = void 0;
const Model_periodicalDistrution_1 = require("./Model_periodicalDistrution");
/**
  permet de créer une plage de date de distribution
*/
class Model_periodicalDistrution_periode extends Model_periodicalDistrution_1.Model_periodicalDistrution {
    /**
      permet de créer une plage de date de distribution
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "periodicalDistrution_periode";
        if (obj["startDate"] != undefined) {
            this["startDate"] = new Date(obj["startDate"]);
        }
        if (obj["endDate"] != undefined) {
            this["endDate"] = new Date(obj["endDate"]);
        }
    }
}
exports.Model_periodicalDistrution_periode = Model_periodicalDistrution_periode;
//# sourceMappingURL=Model_periodicalDistrution_periode.js.map