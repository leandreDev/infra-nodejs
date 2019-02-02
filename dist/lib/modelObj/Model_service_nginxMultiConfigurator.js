"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_service_nginxConfigurator_1 = require("./Model_service_nginxConfigurator");
/**
  configuration d'un service nginx multi configuration
*/
class Model_service_nginxMultiConfigurator extends Model_service_nginxConfigurator_1.Model_service_nginxConfigurator {
    /**
      configuration d'un service nginx multi configuration
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_nginxMultiConfigurator";
        if (obj["nginxUser"] != undefined) {
            this["nginxUser"] = obj["nginxUser"].toString();
        }
        if (obj["serviceUrl"] != undefined) {
            this["serviceUrl"] = obj["serviceUrl"].toString();
        }
        if (obj["clientUrl"] != undefined) {
            this["clientUrl"] = obj["clientUrl"].toString();
        }
        if (obj["appInstanceUrl"] != undefined) {
            this["appInstanceUrl"] = obj["appInstanceUrl"].toString();
        }
        if (obj["appUrl"] != undefined) {
            this["appUrl"] = obj["appUrl"].toString();
        }
        if (obj["configurationFile"] != undefined && obj["configurationFile"] != null && _.isArray(obj["configurationFile"])) {
            this["configurationFile"] = obj["configurationFile"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["nginxConfigurationFile"](value);
                }
            });
        }
        if (obj["configurationApplication"] != undefined && obj["configurationApplication"] != null && _.isArray(obj["configurationApplication"])) {
            this["configurationApplication"] = obj["configurationApplication"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["nginxConfigurationFileApp"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["nginxUser"] != null && target["nginxUser"] != undefined) {
                let _nginxUser = target["nginxUser"];
                if (!_.isString(_nginxUser)) {
                    throw new Error(path + "nginxUser is not a string");
                }
            }
            if (target["serviceUrl"] != null && target["serviceUrl"] != undefined) {
                let _serviceUrl = target["serviceUrl"];
                if (!_.isString(_serviceUrl)) {
                    throw new Error(path + "serviceUrl is not a string");
                }
            }
            if (isCompleteObj && (target["clientUrl"] == null || target["clientUrl"] == undefined)) {
                throw new Error(path + "clientUrl is required");
            }
            if (target["clientUrl"] != null && target["clientUrl"] != undefined) {
                let _clientUrl = target["clientUrl"];
                if (!_.isString(_clientUrl)) {
                    throw new Error(path + "clientUrl is not a string");
                }
            }
            if (target["appInstanceUrl"] != null && target["appInstanceUrl"] != undefined) {
                let _appInstanceUrl = target["appInstanceUrl"];
                if (!_.isString(_appInstanceUrl)) {
                    throw new Error(path + "appInstanceUrl is not a string");
                }
            }
            if (isCompleteObj && (target["appUrl"] == null || target["appUrl"] == undefined)) {
                throw new Error(path + "appUrl is required");
            }
            if (target["appUrl"] != null && target["appUrl"] != undefined) {
                let _appUrl = target["appUrl"];
                if (!_.isString(_appUrl)) {
                    throw new Error(path + "appUrl is not a string");
                }
            }
            if (target["configurationFile"] != null && target["configurationFile"] != undefined) {
                target["configurationFile"].forEach((_configurationFile, index) => {
                    promArr.push(Index["nginxConfigurationFile"].check(_configurationFile, isCompleteObj, path + "configurationFile.")
                        .catch((err) => {
                        throw new Error(path + "configurationFile index: " + index + "is not nginxConfigurationFile");
                    }));
                    if (_configurationFile._class != null && _configurationFile._class != undefined) {
                        promArr.push(Index[_configurationFile._class].check(_configurationFile, isCompleteObj, path + "configurationFile.")
                            .catch((err) => {
                            throw new Error(path + "configurationFile index: " + index + "is not a " + _configurationFile._class);
                        }));
                    }
                });
            }
            if (target["configurationApplication"] != null && target["configurationApplication"] != undefined) {
                target["configurationApplication"].forEach((_configurationApplication, index) => {
                    promArr.push(Index["nginxConfigurationFileApp"].check(_configurationApplication, isCompleteObj, path + "configurationApplication.")
                        .catch((err) => {
                        throw new Error(path + "configurationApplication index: " + index + "is not nginxConfigurationFileApp");
                    }));
                    if (_configurationApplication._class != null && _configurationApplication._class != undefined) {
                        promArr.push(Index[_configurationApplication._class].check(_configurationApplication, isCompleteObj, path + "configurationApplication.")
                            .catch((err) => {
                            throw new Error(path + "configurationApplication index: " + index + "is not a " + _configurationApplication._class);
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
        return Model_service_nginxMultiConfigurator.check(target, true, path).then(() => {
            return new Model_service_nginxMultiConfigurator(target);
        });
    }
}
exports.Model_service_nginxMultiConfigurator = Model_service_nginxMultiConfigurator;
//# sourceMappingURL=Model_service_nginxMultiConfigurator.js.map