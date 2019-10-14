"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.Model_service_fso = Model_service_fso;
//# sourceMappingURL=Model_service_fso.js.map