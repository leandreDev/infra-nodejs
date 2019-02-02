"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  période de distribution
*/
class Model_periodicalDistrution extends utils_1.Base {
    /**
      période de distribution
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "periodicalDistrution";
        if (obj["nbMax"] != undefined) {
            this["nbMax"] = new Number(obj["nbMax"]).valueOf();
        }
        if (obj["currentNb"] != undefined) {
            this["currentNb"] = new Number(obj["currentNb"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["nbMax"] != null && target["nbMax"] != undefined) {
                let _nbMax = target["nbMax"];
                if (!_.isNumber(_nbMax)) {
                    throw new Error(path + "nbMax is not a number");
                }
                if (_nbMax % 1 > 0) {
                    throw new Error(path + "nbMax must be have a step of 1");
                }
            }
            if (target["currentNb"] != null && target["currentNb"] != undefined) {
                let _currentNb = target["currentNb"];
                if (!_.isNumber(_currentNb)) {
                    throw new Error(path + "currentNb is not a number");
                }
                if (_currentNb % 1 > 0) {
                    throw new Error(path + "currentNb must be have a step of 1");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_periodicalDistrution.check(target, true, path).then(() => {
            return new Model_periodicalDistrution(target);
        });
    }
}
exports.Model_periodicalDistrution = Model_periodicalDistrution;
//# sourceMappingURL=Model_periodicalDistrution.js.map