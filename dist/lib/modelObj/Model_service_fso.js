"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_fso = void 0;
const _ = require("lodash");
const Index = require("./Index");
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
        if (obj["proxy"] != undefined && obj["proxy"] != null && _.isArray(obj["proxy"])) {
            this["proxy"] = obj["proxy"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
    }
}
exports.Model_service_fso = Model_service_fso;
