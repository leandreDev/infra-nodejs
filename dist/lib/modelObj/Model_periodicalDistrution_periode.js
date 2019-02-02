"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["startDate"] != null && target["startDate"] != undefined) {
                let _startDate = target["startDate"];
                if (!_.isDate(_startDate)) {
                    throw new Error(path + "startDate is not a Date");
                }
            }
            if (target["endDate"] != null && target["endDate"] != undefined) {
                let _endDate = target["endDate"];
                if (!_.isDate(_endDate)) {
                    throw new Error(path + "endDate is not a Date");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_periodicalDistrution_periode.check(target, true, path).then(() => {
            return new Model_periodicalDistrution_periode(target);
        });
    }
}
exports.Model_periodicalDistrution_periode = Model_periodicalDistrution_periode;
//# sourceMappingURL=Model_periodicalDistrution_periode.js.map