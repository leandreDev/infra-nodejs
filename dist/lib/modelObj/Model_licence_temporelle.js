"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_licence_1 = require("./Model_licence");
/**
  c'est une licence qui dure un certain temps
*/
class Model_licence_temporelle extends Model_licence_1.Model_licence {
    /**
      c'est une licence qui dure un certain temps
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "licence_temporelle";
        if (obj["validityStartDate"] != undefined) {
            this["validityStartDate"] = new Date(obj["validityStartDate"]);
        }
        if (obj["validityEndDate"] != undefined) {
            this["validityEndDate"] = new Date(obj["validityEndDate"]);
        }
        if (obj["licenceDuration"] != undefined) {
            this["licenceDuration"] = new Number(obj["licenceDuration"]).valueOf();
        }
        if (obj["licenceEndDate"] != undefined) {
            this["licenceEndDate"] = new Date(obj["licenceEndDate"]);
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["validityStartDate"] != null && target["validityStartDate"] != undefined) {
                let _validityStartDate = target["validityStartDate"];
                if (!_.isDate(_validityStartDate)) {
                    throw new Error(path + "validityStartDate is not a Date");
                }
            }
            if (target["validityEndDate"] != null && target["validityEndDate"] != undefined) {
                let _validityEndDate = target["validityEndDate"];
                if (!_.isDate(_validityEndDate)) {
                    throw new Error(path + "validityEndDate is not a Date");
                }
            }
            if (target["licenceDuration"] != null && target["licenceDuration"] != undefined) {
                let _licenceDuration = target["licenceDuration"];
                if (!_.isNumber(_licenceDuration)) {
                    throw new Error(path + "licenceDuration is not a number");
                }
            }
            if (target["licenceEndDate"] != null && target["licenceEndDate"] != undefined) {
                let _licenceEndDate = target["licenceEndDate"];
                if (!_.isDate(_licenceEndDate)) {
                    throw new Error(path + "licenceEndDate is not a Date");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_licence_temporelle.check(target, true, path).then(() => {
            return new Model_licence_temporelle(target);
        });
    }
}
exports.Model_licence_temporelle = Model_licence_temporelle;
//# sourceMappingURL=Model_licence_temporelle.js.map