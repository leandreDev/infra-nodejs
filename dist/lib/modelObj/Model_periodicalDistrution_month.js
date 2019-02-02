"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["startDay"] != null && target["startDay"] != undefined) {
                let _startDay = target["startDay"];
                if (!_.isNumber(_startDay)) {
                    throw new Error(path + "startDay is not a number");
                }
                if (_startDay > 1) {
                    throw new Error(path + "startDay must be greater than  1");
                }
                if (_startDay < 31) {
                    throw new Error(path + "startDay must be less than 31");
                }
                if (_startDay % 1 > 0) {
                    throw new Error(path + "startDay must be have a step of 1");
                }
            }
            if (target["endDay"] != null && target["endDay"] != undefined) {
                let _endDay = target["endDay"];
                if (!_.isNumber(_endDay)) {
                    throw new Error(path + "endDay is not a number");
                }
                if (_endDay > 1) {
                    throw new Error(path + "endDay must be greater than  1");
                }
                if (_endDay < 31) {
                    throw new Error(path + "endDay must be less than 31");
                }
                if (_endDay % 1 > 0) {
                    throw new Error(path + "endDay must be have a step of 1");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_periodicalDistrution_month.check(target, true, path).then(() => {
            return new Model_periodicalDistrution_month(target);
        });
    }
}
exports.Model_periodicalDistrution_month = Model_periodicalDistrution_month;
//# sourceMappingURL=Model_periodicalDistrution_month.js.map