"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service_supervision
*/
class Model_service_supervision extends Model_service_1.Model_service {
    /**
      service_supervision
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_supervision";
        if (obj["mongoosePath"] != undefined) {
            this["mongoosePath"] = obj["mongoosePath"].toString();
        }
        if (obj["mongoAuthSource"] != undefined) {
            this["mongoAuthSource"] = obj["mongoAuthSource"].toString();
        }
        if (obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])) {
            this["services"] = obj["services"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["service_supervision_service_conf"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["mongoosePath"] != null && target["mongoosePath"] != undefined) {
                let _mongoosePath = target["mongoosePath"];
                if (!_.isString(_mongoosePath)) {
                    throw new Error(path + "mongoosePath is not a string");
                }
            }
            if (target["mongoAuthSource"] != null && target["mongoAuthSource"] != undefined) {
                let _mongoAuthSource = target["mongoAuthSource"];
                if (!_.isString(_mongoAuthSource)) {
                    throw new Error(path + "mongoAuthSource is not a string");
                }
            }
            if (target["services"] != null && target["services"] != undefined) {
                target["services"].forEach((_services, index) => {
                    promArr.push(Index["service_supervision_service_conf"].check(_services, isCompleteObj, path + "services.")
                        .catch((err) => {
                        throw new Error(path + "services index: " + index + "is not service_supervision_service_conf");
                    }));
                    if (_services._class != null && _services._class != undefined) {
                        promArr.push(Index[_services._class].check(_services, isCompleteObj, path + "services.")
                            .catch((err) => {
                            throw new Error(path + "services index: " + index + "is not a " + _services._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_supervision.check(target, true, path).then(() => {
            return new Model_service_supervision(target);
        });
    }
}
exports.Model_service_supervision = Model_service_supervision;
//# sourceMappingURL=Model_service_supervision.js.map