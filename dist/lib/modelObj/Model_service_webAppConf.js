"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
class Model_service_webAppConf extends Model_service_1.Model_service {
    /**
      permet de générer les fichier de conf des app (css, js, ...)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_webAppConf";
        if (obj["infraBddUrl"] != undefined) {
            this["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["ssoBddUrl"] != undefined) {
            this["ssoBddUrl"] = obj["ssoBddUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["infraBddUrl"] == null || target["infraBddUrl"] == undefined)) {
                throw new Error(path + "infraBddUrl is required");
            }
            if (target["infraBddUrl"] != null && target["infraBddUrl"] != undefined) {
                let _infraBddUrl = target["infraBddUrl"];
                if (!_.isString(_infraBddUrl)) {
                    throw new Error(path + "infraBddUrl is not a string");
                }
            }
            if (isCompleteObj && (target["ssoBddUrl"] == null || target["ssoBddUrl"] == undefined)) {
                throw new Error(path + "ssoBddUrl is required");
            }
            if (target["ssoBddUrl"] != null && target["ssoBddUrl"] != undefined) {
                let _ssoBddUrl = target["ssoBddUrl"];
                if (!_.isString(_ssoBddUrl)) {
                    throw new Error(path + "ssoBddUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_webAppConf.check(target, true, path).then(() => {
            return new Model_service_webAppConf(target);
        });
    }
}
exports.Model_service_webAppConf = Model_service_webAppConf;
//# sourceMappingURL=Model_service_webAppConf.js.map