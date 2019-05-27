"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service de tirage au sort de polo
*/
class Model_service_polo_celio extends Model_service_1.Model_service {
    /**
      service de tirage au sort de polo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_polo_celio";
        /**
  nombre maximum de gagnan
  */
        this["maxNumberOfWinner"] = 500;
        if (obj["bdd_url"] != undefined) {
            this["bdd_url"] = obj["bdd_url"].toString();
        }
        if (obj["maxNumberOfWinner"] != undefined) {
            this["maxNumberOfWinner"] = new Number(obj["maxNumberOfWinner"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["bdd_url"] != null && target["bdd_url"] != undefined) {
                let _bdd_url = target["bdd_url"];
                if (!_.isString(_bdd_url)) {
                    throw new Error(path + "bdd_url is not a string");
                }
            }
            if (isCompleteObj && (target["maxNumberOfWinner"] == null || target["maxNumberOfWinner"] == undefined)) {
                throw new Error(path + "maxNumberOfWinner is required");
            }
            if (target["maxNumberOfWinner"] != null && target["maxNumberOfWinner"] != undefined) {
                let _maxNumberOfWinner = target["maxNumberOfWinner"];
                if (!_.isNumber(_maxNumberOfWinner)) {
                    throw new Error(path + "maxNumberOfWinner is not a number");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_polo_celio.check(target, true, path).then(() => {
            return new Model_service_polo_celio(target);
        });
    }
}
exports.Model_service_polo_celio = Model_service_polo_celio;
//# sourceMappingURL=Model_service_polo_celio.js.map