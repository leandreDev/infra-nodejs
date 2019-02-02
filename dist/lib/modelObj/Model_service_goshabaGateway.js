"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  passerelle pour goshaba
*/
class Model_service_goshabaGateway extends Model_service_1.Model_service {
    /**
      passerelle pour goshaba
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_goshabaGateway";
        if (obj["privateKey"] != undefined) {
            this["privateKey"] = obj["privateKey"].toString();
        }
        if (obj["packUrl"] != undefined) {
            this["packUrl"] = obj["packUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["privateKey"] == null || target["privateKey"] == undefined)) {
                throw new Error(path + "privateKey is required");
            }
            if (target["privateKey"] != null && target["privateKey"] != undefined) {
                let _privateKey = target["privateKey"];
                if (!_.isString(_privateKey)) {
                    throw new Error(path + "privateKey is not a string");
                }
            }
            if (isCompleteObj && (target["packUrl"] == null || target["packUrl"] == undefined)) {
                throw new Error(path + "packUrl is required");
            }
            if (target["packUrl"] != null && target["packUrl"] != undefined) {
                let _packUrl = target["packUrl"];
                if (!_.isString(_packUrl)) {
                    throw new Error(path + "packUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_goshabaGateway.check(target, true, path).then(() => {
            return new Model_service_goshabaGateway(target);
        });
    }
}
exports.Model_service_goshabaGateway = Model_service_goshabaGateway;
//# sourceMappingURL=Model_service_goshabaGateway.js.map