"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  client ftps
*/
class Model_service_client_ftp extends Model_service_1.Model_service {
    /**
      client ftps
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_client_ftp";
        /**
  port
  */
        this["ftpPort"] = 21;
        if (obj["host"] != undefined) {
            this["host"] = obj["host"].toString();
        }
        if (obj["ftpPort"] != undefined) {
            this["ftpPort"] = new Number(obj["ftpPort"]).valueOf();
        }
        if (obj["user"] != undefined) {
            this["user"] = obj["user"].toString();
        }
        if (obj["password"] != undefined) {
            this["password"] = obj["password"].toString();
        }
        if (obj["downloadPath"] != undefined) {
            this["downloadPath"] = obj["downloadPath"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["host"] == null || target["host"] == undefined)) {
                throw new Error(path + "host is required");
            }
            if (target["host"] != null && target["host"] != undefined) {
                let _host = target["host"];
                if (!_.isString(_host)) {
                    throw new Error(path + "host is not a string");
                }
            }
            if (isCompleteObj && (target["ftpPort"] == null || target["ftpPort"] == undefined)) {
                throw new Error(path + "ftpPort is required");
            }
            if (target["ftpPort"] != null && target["ftpPort"] != undefined) {
                let _ftpPort = target["ftpPort"];
                if (!_.isNumber(_ftpPort)) {
                    throw new Error(path + "ftpPort is not a number");
                }
            }
            if (isCompleteObj && (target["user"] == null || target["user"] == undefined)) {
                throw new Error(path + "user is required");
            }
            if (target["user"] != null && target["user"] != undefined) {
                let _user = target["user"];
                if (!_.isString(_user)) {
                    throw new Error(path + "user is not a string");
                }
            }
            if (isCompleteObj && (target["password"] == null || target["password"] == undefined)) {
                throw new Error(path + "password is required");
            }
            if (target["password"] != null && target["password"] != undefined) {
                let _password = target["password"];
                if (!_.isString(_password)) {
                    throw new Error(path + "password is not a string");
                }
            }
            if (isCompleteObj && (target["downloadPath"] == null || target["downloadPath"] == undefined)) {
                throw new Error(path + "downloadPath is required");
            }
            if (target["downloadPath"] != null && target["downloadPath"] != undefined) {
                let _downloadPath = target["downloadPath"];
                if (!_.isString(_downloadPath)) {
                    throw new Error(path + "downloadPath is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_client_ftp.check(target, true, path).then(() => {
            return new Model_service_client_ftp(target);
        });
    }
}
exports.Model_service_client_ftp = Model_service_client_ftp;
//# sourceMappingURL=Model_service_client_ftp.js.map