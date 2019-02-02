"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service de gestion des message tutoré
*/
class Model_service_tutor extends Model_service_1.Model_service {
    /**
      service de gestion des message tutoré
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_tutor";
        if (obj["apiSession"] != undefined) {
            this["apiSession"] = obj["apiSession"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["apiSession"] == null || target["apiSession"] == undefined)) {
                throw new Error(path + "apiSession is required");
            }
            if (target["apiSession"] != null && target["apiSession"] != undefined) {
                let _apiSession = target["apiSession"];
                if (!_.isString(_apiSession)) {
                    throw new Error(path + "apiSession is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_tutor.check(target, true, path).then(() => {
            return new Model_service_tutor(target);
        });
    }
}
exports.Model_service_tutor = Model_service_tutor;
//# sourceMappingURL=Model_service_tutor.js.map