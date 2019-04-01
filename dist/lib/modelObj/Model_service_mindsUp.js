"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service minds up metier
*/
class Model_service_mindsUp extends Model_service_1.Model_service {
    /**
      service minds up metier
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_mindsUp";
        if (obj["urlApi"] != undefined) {
            this["urlApi"] = obj["urlApi"].toString();
        }
        if (obj["urlSsoApi"] != undefined) {
            this["urlSsoApi"] = obj["urlSsoApi"].toString();
        }
        if (obj["urlLicenceService"] != undefined) {
            this["urlLicenceService"] = obj["urlLicenceService"].toString();
        }
        if (obj["urlInfraBdd"] != undefined) {
            this["urlInfraBdd"] = obj["urlInfraBdd"].toString();
        }
        if (obj["applicationClienteConfig"] != undefined) {
            if (_.isString(obj["applicationClienteConfig"])) {
                this["applicationClienteConfig"] = obj["applicationClienteConfig"];
            }
            else if (obj["applicationClienteConfig"]._id) {
                this["applicationClienteConfig"] = obj["applicationClienteConfig"]._id;
            }
        }
        if (obj["applicationAdminConfig"] != undefined) {
            if (_.isString(obj["applicationAdminConfig"])) {
                this["applicationAdminConfig"] = obj["applicationAdminConfig"];
            }
            else if (obj["applicationAdminConfig"]._id) {
                this["applicationAdminConfig"] = obj["applicationAdminConfig"]._id;
            }
        }
        if (obj["ftpConf"] != undefined) {
            if (obj._class) {
                this["ftpConf"] = new Index[obj._class](obj["ftpConf"]);
            }
            else {
                this["ftpConf"] = new Index["ftpsConfig"](obj["ftpConf"]);
            }
        }
        if (obj["appId"] != undefined) {
            if (_.isString(obj["appId"])) {
                this["appId"] = obj["appId"];
            }
            else if (obj["appId"]._id) {
                this["appId"] = obj["appId"]._id;
            }
        }
        if (obj["adminAppId"] != undefined) {
            if (_.isString(obj["adminAppId"])) {
                this["adminAppId"] = obj["adminAppId"];
            }
            else if (obj["adminAppId"]._id) {
                this["adminAppId"] = obj["adminAppId"]._id;
            }
        }
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                this["end_client"] = obj["end_client"];
            }
            else if (obj["end_client"]._id) {
                this["end_client"] = obj["end_client"]._id;
            }
        }
        if (obj["licenceStoreId"] != undefined) {
            this["licenceStoreId"] = obj["licenceStoreId"].toString();
        }
        if (obj["adminLicenceStoreId"] != undefined) {
            this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["urlApi"] == null || target["urlApi"] == undefined)) {
                throw new Error(path + "urlApi is required");
            }
            if (target["urlApi"] != null && target["urlApi"] != undefined) {
                let _urlApi = target["urlApi"];
                if (!_.isString(_urlApi)) {
                    throw new Error(path + "urlApi is not a string");
                }
            }
            if (isCompleteObj && (target["urlSsoApi"] == null || target["urlSsoApi"] == undefined)) {
                throw new Error(path + "urlSsoApi is required");
            }
            if (target["urlSsoApi"] != null && target["urlSsoApi"] != undefined) {
                let _urlSsoApi = target["urlSsoApi"];
                if (!_.isString(_urlSsoApi)) {
                    throw new Error(path + "urlSsoApi is not a string");
                }
            }
            if (isCompleteObj && (target["urlLicenceService"] == null || target["urlLicenceService"] == undefined)) {
                throw new Error(path + "urlLicenceService is required");
            }
            if (target["urlLicenceService"] != null && target["urlLicenceService"] != undefined) {
                let _urlLicenceService = target["urlLicenceService"];
                if (!_.isString(_urlLicenceService)) {
                    throw new Error(path + "urlLicenceService is not a string");
                }
            }
            if (isCompleteObj && (target["urlInfraBdd"] == null || target["urlInfraBdd"] == undefined)) {
                throw new Error(path + "urlInfraBdd is required");
            }
            if (target["urlInfraBdd"] != null && target["urlInfraBdd"] != undefined) {
                let _urlInfraBdd = target["urlInfraBdd"];
                if (!_.isString(_urlInfraBdd)) {
                    throw new Error(path + "urlInfraBdd is not a string");
                }
            }
            if (isCompleteObj && (target["applicationClienteConfig"] == null || target["applicationClienteConfig"] == undefined)) {
                throw new Error(path + "applicationClienteConfig is required");
            }
            if (target["applicationClienteConfig"] != null && target["applicationClienteConfig"] != undefined) {
                let _applicationClienteConfig = target["applicationClienteConfig"];
                if (!_.isString(_applicationClienteConfig)) {
                    throw new Error(path + "applicationClienteConfig is not a string");
                }
            }
            if (isCompleteObj && (target["applicationAdminConfig"] == null || target["applicationAdminConfig"] == undefined)) {
                throw new Error(path + "applicationAdminConfig is required");
            }
            if (target["applicationAdminConfig"] != null && target["applicationAdminConfig"] != undefined) {
                let _applicationAdminConfig = target["applicationAdminConfig"];
                if (!_.isString(_applicationAdminConfig)) {
                    throw new Error(path + "applicationAdminConfig is not a string");
                }
            }
            if (target["ftpConf"] != null && target["ftpConf"] != undefined) {
                let _ftpConf = target["ftpConf"];
                promArr.push(Index["ftpsConfig"].check(_ftpConf, isCompleteObj, path + "ftpConf.")
                    .catch((err) => {
                    throw new Error(path + "ftpConf is not ");
                }));
                if (_ftpConf._class != null && _ftpConf._class != undefined) {
                    promArr.push(Index[_ftpConf._class].check(_ftpConf, isCompleteObj, path + "ftpConf.")
                        .catch((err) => {
                        throw new Error(path + "ftpConf is not a " + _ftpConf._class);
                    }));
                }
            }
            if (isCompleteObj && (target["appId"] == null || target["appId"] == undefined)) {
                throw new Error(path + "appId is required");
            }
            if (target["appId"] != null && target["appId"] != undefined) {
                let _appId = target["appId"];
                if (!_.isString(_appId)) {
                    throw new Error(path + "appId is not a string");
                }
            }
            if (isCompleteObj && (target["adminAppId"] == null || target["adminAppId"] == undefined)) {
                throw new Error(path + "adminAppId is required");
            }
            if (target["adminAppId"] != null && target["adminAppId"] != undefined) {
                let _adminAppId = target["adminAppId"];
                if (!_.isString(_adminAppId)) {
                    throw new Error(path + "adminAppId is not a string");
                }
            }
            if (target["end_client"] != null && target["end_client"] != undefined) {
                let _end_client = target["end_client"];
                if (!_.isString(_end_client)) {
                    throw new Error(path + "end_client is not a string");
                }
            }
            if (isCompleteObj && (target["licenceStoreId"] == null || target["licenceStoreId"] == undefined)) {
                throw new Error(path + "licenceStoreId is required");
            }
            if (target["licenceStoreId"] != null && target["licenceStoreId"] != undefined) {
                let _licenceStoreId = target["licenceStoreId"];
                if (!_.isString(_licenceStoreId)) {
                    throw new Error(path + "licenceStoreId is not a string");
                }
            }
            if (isCompleteObj && (target["adminLicenceStoreId"] == null || target["adminLicenceStoreId"] == undefined)) {
                throw new Error(path + "adminLicenceStoreId is required");
            }
            if (target["adminLicenceStoreId"] != null && target["adminLicenceStoreId"] != undefined) {
                let _adminLicenceStoreId = target["adminLicenceStoreId"];
                if (!_.isString(_adminLicenceStoreId)) {
                    throw new Error(path + "adminLicenceStoreId is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_mindsUp.check(target, true, path).then(() => {
            return new Model_service_mindsUp(target);
        });
    }
}
exports.Model_service_mindsUp = Model_service_mindsUp;
//# sourceMappingURL=Model_service_mindsUp.js.map