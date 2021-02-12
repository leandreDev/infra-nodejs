"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_url_role = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  règle de sécurité relative aux url
*/
class Model_url_role extends utils_1.Base {
    /**
      règle de sécurité relative aux url
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "url_role";
        if (obj["_$get"] != undefined && obj["_$get"] != null && _.isArray(obj["_$get"])) {
            this["_$get"] = obj["_$get"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["route_role"](value);
                }
            });
        }
        if (obj["_$post"] != undefined && obj["_$post"] != null && _.isArray(obj["_$post"])) {
            this["_$post"] = obj["_$post"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["route_role"](value);
                }
            });
        }
        if (obj["_$delete"] != undefined && obj["_$delete"] != null && _.isArray(obj["_$delete"])) {
            this["_$delete"] = obj["_$delete"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["route_role"](value);
                }
            });
        }
        if (obj["_$put"] != undefined && obj["_$put"] != null && _.isArray(obj["_$put"])) {
            this["_$put"] = obj["_$put"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["route_role"](value);
                }
            });
        }
        if (obj["_$patch"] != undefined && obj["_$patch"] != null && _.isArray(obj["_$patch"])) {
            this["_$patch"] = obj["_$patch"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["route_role"](value);
                }
            });
        }
    }
}
exports.Model_url_role = Model_url_role;
