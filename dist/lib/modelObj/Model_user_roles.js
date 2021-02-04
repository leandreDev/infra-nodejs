"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_user_roles = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  paire utilisateurs role
*/
class Model_user_roles extends utils_1.Base {
    /**
      paire utilisateurs role
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "user_roles";
        if (obj["user"] != undefined) {
            if (_.isString(obj["user"])) {
                this["user"] = obj["user"];
            }
            else if (obj["user"]._id) {
                this["user"] = obj["user"]._id;
            }
        }
        if (obj["roles"] != undefined && obj["roles"] != null && _.isArray(obj["roles"])) {
            this["roles"] = obj["roles"].map((value) => {
                return value.toString();
            });
        }
    }
}
exports.Model_user_roles = Model_user_roles;
//# sourceMappingURL=Model_user_roles.js.map