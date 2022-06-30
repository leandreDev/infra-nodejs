"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_access = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  décrit les régles de paramètre des servies
*/
class Model_service_access extends utils_1.Base {
    /**
      décrit les régles de paramètre des servies
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_access";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["service"] != undefined) {
            if (_.isString(obj["service"])) {
                this["service"] = obj["service"];
            }
            else if (obj["service"]._id) {
                this["service"] = obj["service"]._id;
            }
            else if (obj["service"]._bsontype && (obj["service"]._bsontype === 'ObjectID')) {
                this["service"] = obj["service"];
            }
        }
        if (obj["httAccess"] != undefined) {
            if (obj["httAccess"]._class) {
                this["httAccess"] = new Index[obj["httAccess"]._class](obj["httAccess"]);
            }
            else {
                this["httAccess"] = new Index["url_role"](obj["httAccess"]);
            }
        }
    }
}
exports.Model_service_access = Model_service_access;
