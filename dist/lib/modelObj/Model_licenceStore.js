"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  stock de licence distribuable
*/
class Model_licenceStore extends utils_1.Base {
    /**
      stock de licence distribuable
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "licenceStore";
        if (obj["nbLicence"] != undefined) {
            this["nbLicence"] = new Number(obj["nbLicence"]).valueOf();
        }
        if (obj["licenceTemplate"] != undefined && obj["licenceTemplate"] != null && _.isArray(obj["licenceTemplate"])) {
            this["licenceTemplate"] = obj["licenceTemplate"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["licence"](value);
                }
            });
        }
        if (obj["autoAssign"] != undefined) {
            this["autoAssign"] = new Boolean(obj["autoAssign"]).valueOf();
        }
        if (obj["validytyStartDate"] != undefined) {
            this["validytyStartDate"] = new Date(obj["validytyStartDate"]);
        }
        if (obj["validityEndDate"] != undefined) {
            this["validityEndDate"] = new Date(obj["validityEndDate"]);
        }
        if (obj["distributionPeriode"] != undefined && obj["distributionPeriode"] != null && _.isArray(obj["distributionPeriode"])) {
            this["distributionPeriode"] = obj["distributionPeriode"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["periodicalDistrution"](value);
                }
            });
        }
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["nbLicenceOriginal"] != undefined) {
            this["nbLicenceOriginal"] = new Number(obj["nbLicenceOriginal"]).valueOf();
        }
        if (obj["ref"] != undefined) {
            this["ref"] = obj["ref"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["nbLicence"] != null && target["nbLicence"] != undefined) {
                let _nbLicence = target["nbLicence"];
                if (!_.isNumber(_nbLicence)) {
                    throw new Error(path + "nbLicence is not a number");
                }
                if (_nbLicence % 1 > 0) {
                    throw new Error(path + "nbLicence must be have a step of 1");
                }
            }
            if (target["licenceTemplate"] != null && target["licenceTemplate"] != undefined) {
                target["licenceTemplate"].forEach((_licenceTemplate, index) => {
                    promArr.push(Index["licence"].check(_licenceTemplate, isCompleteObj, path + "licenceTemplate.")
                        .catch((err) => {
                        throw new Error(path + "licenceTemplate index: " + index + "is not licence");
                    }));
                    if (_licenceTemplate._class != null && _licenceTemplate._class != undefined) {
                        promArr.push(Index[_licenceTemplate._class].check(_licenceTemplate, isCompleteObj, path + "licenceTemplate.")
                            .catch((err) => {
                            throw new Error(path + "licenceTemplate index: " + index + "is not a " + _licenceTemplate._class);
                        }));
                    }
                });
            }
            if (target["autoAssign"] != null && target["autoAssign"] != undefined) {
                let _autoAssign = target["autoAssign"];
                if (!_.isBoolean(_autoAssign)) {
                    throw new Error(path + "autoAssign is not a boolean");
                }
            }
            if (target["validytyStartDate"] != null && target["validytyStartDate"] != undefined) {
                let _validytyStartDate = target["validytyStartDate"];
                if (!_.isDate(_validytyStartDate)) {
                    throw new Error(path + "validytyStartDate is not a Date");
                }
            }
            if (target["validityEndDate"] != null && target["validityEndDate"] != undefined) {
                let _validityEndDate = target["validityEndDate"];
                if (!_.isDate(_validityEndDate)) {
                    throw new Error(path + "validityEndDate is not a Date");
                }
            }
            if (target["distributionPeriode"] != null && target["distributionPeriode"] != undefined) {
                target["distributionPeriode"].forEach((_distributionPeriode, index) => {
                    promArr.push(Index["periodicalDistrution"].check(_distributionPeriode, isCompleteObj, path + "distributionPeriode.")
                        .catch((err) => {
                        throw new Error(path + "distributionPeriode index: " + index + "is not periodicalDistrution");
                    }));
                    if (_distributionPeriode._class != null && _distributionPeriode._class != undefined) {
                        promArr.push(Index[_distributionPeriode._class].check(_distributionPeriode, isCompleteObj, path + "distributionPeriode.")
                            .catch((err) => {
                            throw new Error(path + "distributionPeriode index: " + index + "is not a " + _distributionPeriode._class);
                        }));
                    }
                });
            }
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (isCompleteObj && (target["nbLicenceOriginal"] == null || target["nbLicenceOriginal"] == undefined)) {
                throw new Error(path + "nbLicenceOriginal is required");
            }
            if (target["nbLicenceOriginal"] != null && target["nbLicenceOriginal"] != undefined) {
                let _nbLicenceOriginal = target["nbLicenceOriginal"];
                if (!_.isNumber(_nbLicenceOriginal)) {
                    throw new Error(path + "nbLicenceOriginal is not a number");
                }
            }
            if (target["ref"] != null && target["ref"] != undefined) {
                let _ref = target["ref"];
                if (!_.isString(_ref)) {
                    throw new Error(path + "ref is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_licenceStore.check(target, true, path).then(() => {
            return new Model_licenceStore(target);
        });
    }
}
exports.Model_licenceStore = Model_licenceStore;
//# sourceMappingURL=Model_licenceStore.js.map