"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_periodicalDistrution_month = void 0;
const Model_periodicalDistrution_1 = require("./Model_periodicalDistrution");
/**
  permet de limiter la distribution chaque jour du mois
*/
class Model_periodicalDistrution_month extends Model_periodicalDistrution_1.Model_periodicalDistrution {
    /**
      permet de limiter la distribution chaque jour du mois
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "periodicalDistrution_month";
        /**
  jour de début de distribution
  */
        this["startDay"] = 1;
        /**
  jour de fin de distribution
  */
        this["endDay"] = 31;
        if (obj["startDay"] != undefined) {
            this["startDay"] = new Number(obj["startDay"]).valueOf();
        }
        if (obj["endDay"] != undefined) {
            this["endDay"] = new Number(obj["endDay"]).valueOf();
        }
    }
}
exports.Model_periodicalDistrution_month = Model_periodicalDistrution_month;
