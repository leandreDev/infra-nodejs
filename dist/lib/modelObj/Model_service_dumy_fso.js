"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_dumy_fso = void 0;
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
}
exports.Model_service_dumy_fso = Model_service_dumy_fso;
//# sourceMappingURL=Model_service_dumy_fso.js.map