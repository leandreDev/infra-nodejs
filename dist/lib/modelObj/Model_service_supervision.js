"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_supervision = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service_supervision
*/
class Model_service_supervision extends Model_service_1.Model_service {
    /**
      service_supervision
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_supervision";
        if (obj["mongoosePath"] != undefined) {
            this["mongoosePath"] = obj["mongoosePath"].toString();
        }
        if (obj["mongoAuthSource"] != undefined) {
            this["mongoAuthSource"] = obj["mongoAuthSource"].toString();
        }
        if (obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])) {
            this["services"] = obj["services"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["service_supervision_service_conf"](value);
                }
            });
        }
    }
}
exports.Model_service_supervision = Model_service_supervision;
//# sourceMappingURL=Model_service_supervision.js.map