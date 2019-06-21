"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  remote file system
*/
class Model_service_fso extends Model_service_1.Model_service {
    /**
      remote file system
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_fso";
        if (obj["filePath"] != undefined) {
            this["filePath"] = obj["filePath"].toString();
        }
        if (obj["bddServiceUrl"] != undefined) {
            this["bddServiceUrl"] = obj["bddServiceUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["filePath"] == null || target["filePath"] == undefined)) {
                throw new Error(path + "filePath is required");
            }
            if (target["filePath"] != null && target["filePath"] != undefined) {
                let _filePath = target["filePath"];
                if (!_.isString(_filePath)) {
                    throw new Error(path + "filePath is not a string");
                }
            }
            if (isCompleteObj && (target["bddServiceUrl"] == null || target["bddServiceUrl"] == undefined)) {
                throw new Error(path + "bddServiceUrl is required");
            }
            if (target["bddServiceUrl"] != null && target["bddServiceUrl"] != undefined) {
                let _bddServiceUrl = target["bddServiceUrl"];
                if (!_.isString(_bddServiceUrl)) {
                    throw new Error(path + "bddServiceUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_fso.check(target, true, path).then(() => {
            return new Model_service_fso(target);
        });
    }
}
exports.Model_service_fso = Model_service_fso;
//# sourceMappingURL=Model_service_fso.js.map