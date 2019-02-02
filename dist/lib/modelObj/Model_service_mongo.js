"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  configure un service mongo
*/
class Model_service_mongo extends Model_service_1.Model_service {
    /**
      configure un service mongo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_mongo";
        /**
  clef secrète de communication interne a l'infra
  */
        this["secretKey"] = "$$ENV.SECRET";
        if (obj["mongoosePath"] != undefined) {
            this["mongoosePath"] = obj["mongoosePath"].toString();
        }
        if (obj["mongoAuthSource"] != undefined) {
            this["mongoAuthSource"] = obj["mongoAuthSource"].toString();
        }
        if (obj["secretKey"] != undefined) {
            this["secretKey"] = obj["secretKey"].toString();
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
            if (target["secretKey"] != null && target["secretKey"] != undefined) {
                let _secretKey = target["secretKey"];
                if (!_.isString(_secretKey)) {
                    throw new Error(path + "secretKey is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_mongo.check(target, true, path).then(() => {
            return new Model_service_mongo(target);
        });
    }
}
exports.Model_service_mongo = Model_service_mongo;
//# sourceMappingURL=Model_service_mongo.js.map