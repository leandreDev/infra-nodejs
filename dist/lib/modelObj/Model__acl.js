"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model__acl = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  Acl d'un enregistrement
*/
class Model__acl extends utils_1.Base {
    /**
      Acl d'un enregistrement
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "_acl";
        if (obj["creator"] != undefined) {
            if (_.isString(obj["creator"])) {
                this["creator"] = obj["creator"];
            }
            else if (obj["creator"]._id) {
                this["creator"] = obj["creator"]._id;
            }
        }
        if (obj["readers"] != undefined && obj["readers"] != null && _.isArray(obj["readers"])) {
            this["readers"] = obj["readers"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["aclIdentity"](value);
                }
            });
        }
        if (obj["writers"] != undefined && obj["writers"] != null && _.isArray(obj["writers"])) {
            this["writers"] = obj["writers"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["aclIdentity"](value);
                }
            });
        }
        if (obj["admins"] != undefined && obj["admins"] != null && _.isArray(obj["admins"])) {
            this["admins"] = obj["admins"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["aclIdentity"](value);
                }
            });
        }
    }
}
exports.Model__acl = Model__acl;
