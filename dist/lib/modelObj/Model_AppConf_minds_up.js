"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config de l'app minds up
*/
class Model_AppConf_minds_up extends Model_application_configuration_1.Model_application_configuration {
    /**
      config de l'app minds up
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "AppConf_minds_up";
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["serviceMindsUpUrl"] != undefined) {
            this["serviceMindsUpUrl"] = obj["serviceMindsUpUrl"].toString();
        }
        if (obj["videoUrl"] != undefined) {
            this["videoUrl"] = obj["videoUrl"].toString();
        }
        if (obj["introTitle"] != undefined) {
            this["introTitle"] = obj["introTitle"].toString();
        }
        if (obj["introText"] != undefined) {
            this["introText"] = obj["introText"].toString();
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
            if (isCompleteObj && (target["serviceMindsUpUrl"] == null || target["serviceMindsUpUrl"] == undefined)) {
                throw new Error(path + "serviceMindsUpUrl is required");
            }
            if (target["serviceMindsUpUrl"] != null && target["serviceMindsUpUrl"] != undefined) {
                let _serviceMindsUpUrl = target["serviceMindsUpUrl"];
                if (!_.isString(_serviceMindsUpUrl)) {
                    throw new Error(path + "serviceMindsUpUrl is not a string");
                }
            }
            if (target["videoUrl"] != null && target["videoUrl"] != undefined) {
                let _videoUrl = target["videoUrl"];
                if (!_.isString(_videoUrl)) {
                    throw new Error(path + "videoUrl is not a string");
                }
            }
            if (target["introTitle"] != null && target["introTitle"] != undefined) {
                let _introTitle = target["introTitle"];
                if (!_.isString(_introTitle)) {
                    throw new Error(path + "introTitle is not a string");
                }
            }
            if (target["introText"] != null && target["introText"] != undefined) {
                let _introText = target["introText"];
                if (!_.isString(_introText)) {
                    throw new Error(path + "introText is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_AppConf_minds_up.check(target, true, path).then(() => {
            return new Model_AppConf_minds_up(target);
        });
    }
}
exports.Model_AppConf_minds_up = Model_AppConf_minds_up;
//# sourceMappingURL=Model_AppConf_minds_up.js.map