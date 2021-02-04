"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_route_role = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  paire route et role
*/
class Model_route_role extends utils_1.Base {
    /**
      paire route et role
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "route_role";
        /**
  route à protéger
  */
        this["route"] = "/";
        if (obj["route"] != undefined) {
            this["route"] = obj["route"].toString();
        }
        if (obj["role"] != undefined && obj["role"] != null && _.isArray(obj["role"])) {
            this["role"] = obj["role"].map((value) => {
                return value.toString();
            });
        }
    }
}
exports.Model_route_role = Model_route_role;
//# sourceMappingURL=Model_route_role.js.map