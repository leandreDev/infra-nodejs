"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index = require("./Index");
const utils_1 = require("utils");
/**
  identification du service
*/
class Model_service extends utils_1.Base {
    /**
      identification du service
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["urlBase"] != undefined) {
            this["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["port"] != undefined) {
            this["port"] = new Number(obj["port"]).valueOf();
        }
        if (obj["debug"] != undefined) {
            this["debug"] = new Boolean(obj["debug"]).valueOf();
        }
        if (obj["licence_well-known"] != undefined) {
            this["licence_well-known"] = obj["licence_well-known"].toString();
        }
        if (obj["secretKey"] != undefined) {
            this["secretKey"] = obj["secretKey"].toString();
        }
        if (obj["publicAccess"] != undefined) {
            if (obj._class) {
                this["publicAccess"] = new Index[obj._class](obj["publicAccess"]);
            }
            else {
                this["publicAccess"] = new Index["url_role"](obj["publicAccess"]);
            }
        }
    }
}
exports.Model_service = Model_service;
//# sourceMappingURL=Model_service.js.map