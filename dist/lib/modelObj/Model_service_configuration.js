"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  c'est le service de distribution des configurations des services
*/
class Model_service_configuration extends Model_service_1.Model_service {
    /**
      c'est le service de distribution des configurations des services
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_configuration";
        /**
  le nom de la collection des services
  */
        this["serviceCollectionName"] = "services";
        /**
  les configurations de service des applications
  */
        this["serviceConfigCollectionName"] = "mongo_service_configs";
        if (obj["srvUrl"] != undefined) {
            this["srvUrl"] = obj["srvUrl"].toString();
        }
        if (obj["serviceCollectionName"] != undefined) {
            this["serviceCollectionName"] = obj["serviceCollectionName"].toString();
        }
        if (obj["serviceConfigCollectionName"] != undefined) {
            this["serviceConfigCollectionName"] = obj["serviceConfigCollectionName"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["srvUrl"] != null && target["srvUrl"] != undefined) {
                let _srvUrl = target["srvUrl"];
                if (!_.isString(_srvUrl)) {
                    throw new Error(path + "srvUrl is not a string");
                }
            }
            if (target["serviceCollectionName"] != null && target["serviceCollectionName"] != undefined) {
                let _serviceCollectionName = target["serviceCollectionName"];
                if (!_.isString(_serviceCollectionName)) {
                    throw new Error(path + "serviceCollectionName is not a string");
                }
            }
            if (target["serviceConfigCollectionName"] != null && target["serviceConfigCollectionName"] != undefined) {
                let _serviceConfigCollectionName = target["serviceConfigCollectionName"];
                if (!_.isString(_serviceConfigCollectionName)) {
                    throw new Error(path + "serviceConfigCollectionName is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_configuration.check(target, true, path).then(() => {
            return new Model_service_configuration(target);
        });
    }
}
exports.Model_service_configuration = Model_service_configuration;
//# sourceMappingURL=Model_service_configuration.js.map