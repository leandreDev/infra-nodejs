"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  simple remote file system a n utiliser que pour des test
*/
class Model_service_dumy_fso extends Model_service_1.Model_service {
    /**
      simple remote file system a n utiliser que pour des test
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_dumy_fso";
        if (obj["fsoBase"] != undefined) {
            this["fsoBase"] = obj["fsoBase"].toString();
        }
        if (obj["url_bd"] != undefined) {
            this["url_bd"] = obj["url_bd"].toString();
        }
        if (obj["url_folder_collection"] != undefined) {
            this["url_folder_collection"] = obj["url_folder_collection"].toString();
        }
        if (obj["url_file_collection"] != undefined) {
            this["url_file_collection"] = obj["url_file_collection"].toString();
        }
        if (obj["url_service"] != undefined) {
            this["url_service"] = obj["url_service"].toString();
        }
        if (obj["root_file_directory"] != undefined) {
            this["root_file_directory"] = obj["root_file_directory"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["fsoBase"] != null && target["fsoBase"] != undefined) {
                let _fsoBase = target["fsoBase"];
                if (!_.isString(_fsoBase)) {
                    throw new Error(path + "fsoBase is not a string");
                }
            }
            if (target["url_bd"] != null && target["url_bd"] != undefined) {
                let _url_bd = target["url_bd"];
                if (!_.isString(_url_bd)) {
                    throw new Error(path + "url_bd is not a string");
                }
            }
            if (target["url_folder_collection"] != null && target["url_folder_collection"] != undefined) {
                let _url_folder_collection = target["url_folder_collection"];
                if (!_.isString(_url_folder_collection)) {
                    throw new Error(path + "url_folder_collection is not a string");
                }
            }
            if (target["url_file_collection"] != null && target["url_file_collection"] != undefined) {
                let _url_file_collection = target["url_file_collection"];
                if (!_.isString(_url_file_collection)) {
                    throw new Error(path + "url_file_collection is not a string");
                }
            }
            if (target["url_service"] != null && target["url_service"] != undefined) {
                let _url_service = target["url_service"];
                if (!_.isString(_url_service)) {
                    throw new Error(path + "url_service is not a string");
                }
            }
            if (target["root_file_directory"] != null && target["root_file_directory"] != undefined) {
                let _root_file_directory = target["root_file_directory"];
                if (!_.isString(_root_file_directory)) {
                    throw new Error(path + "root_file_directory is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_dumy_fso.check(target, true, path).then(() => {
            return new Model_service_dumy_fso(target);
        });
    }
}
exports.Model_service_dumy_fso = Model_service_dumy_fso;
//# sourceMappingURL=Model_service_dumy_fso.js.map