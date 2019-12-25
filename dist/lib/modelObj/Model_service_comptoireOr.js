"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service_comptoireOr
*/
class Model_service_comptoireOr extends Model_service_1.Model_service {
    /**
      service_comptoireOr
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_comptoireOr";
        if (obj["bddApiUrl"] != undefined) {
            this["bddApiUrl"] = obj["bddApiUrl"].toString();
        }
        if (obj["confId"] != undefined) {
            if (_.isString(obj["confId"])) {
                this["confId"] = obj["confId"];
            }
            else if (obj["confId"]._id) {
                this["confId"] = obj["confId"]._id;
            }
        }
    }
}
exports.Model_service_comptoireOr = Model_service_comptoireOr;
//# sourceMappingURL=Model_service_comptoireOr.js.map