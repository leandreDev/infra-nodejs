"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_licenceStore = void 0;
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
}
exports.Model_licenceStore = Model_licenceStore;
