"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service d'orchestration
*/
class Model_service_orchestrator extends Model_service_1.Model_service {
    /**
      service d'orchestration
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_orchestrator";
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["apiUrl"] == null || target["apiUrl"] == undefined)) {
                throw new Error(path + "apiUrl is required");
            }
            if (target["apiUrl"] != null && target["apiUrl"] != undefined) {
                let _apiUrl = target["apiUrl"];
                if (!_.isString(_apiUrl)) {
                    throw new Error(path + "apiUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_orchestrator.check(target, true, path).then(() => {
            return new Model_service_orchestrator(target);
        });
    }
}
exports.Model_service_orchestrator = Model_service_orchestrator;
//# sourceMappingURL=Model_service_orchestrator.js.map