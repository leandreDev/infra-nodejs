"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["lundi"] != null && target["lundi"] != undefined) {
                let _lundi = target["lundi"];
                if (!_.isBoolean(_lundi)) {
                    throw new Error(path + "lundi is not a boolean");
                }
            }
            if (target["mardi"] != null && target["mardi"] != undefined) {
                let _mardi = target["mardi"];
                if (!_.isBoolean(_mardi)) {
                    throw new Error(path + "mardi is not a boolean");
                }
            }
            if (target["mercredi"] != null && target["mercredi"] != undefined) {
                let _mercredi = target["mercredi"];
                if (!_.isBoolean(_mercredi)) {
                    throw new Error(path + "mercredi is not a boolean");
                }
            }
            if (target["jeudi"] != null && target["jeudi"] != undefined) {
                let _jeudi = target["jeudi"];
                if (!_.isBoolean(_jeudi)) {
                    throw new Error(path + "jeudi is not a boolean");
                }
            }
            if (target["vendredi"] != null && target["vendredi"] != undefined) {
                let _vendredi = target["vendredi"];
                if (!_.isBoolean(_vendredi)) {
                    throw new Error(path + "vendredi is not a boolean");
                }
            }
            if (target["samedi"] != null && target["samedi"] != undefined) {
                let _samedi = target["samedi"];
                if (!_.isBoolean(_samedi)) {
                    throw new Error(path + "samedi is not a boolean");
                }
            }
            if (target["dimanche"] != null && target["dimanche"] != undefined) {
                let _dimanche = target["dimanche"];
                if (!_.isBoolean(_dimanche)) {
                    throw new Error(path + "dimanche is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_periodicalDistrution_day.check(target, true, path).then(() => {
            return new Model_periodicalDistrution_day(target);
        });
    }
}
exports.Model_periodicalDistrution_day = Model_periodicalDistrution_day;
//# sourceMappingURL=Model_periodicalDistrution_day.js.map