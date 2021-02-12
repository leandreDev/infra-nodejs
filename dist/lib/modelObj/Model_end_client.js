"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_end_client = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  c'est le client que l'on facture
*/
class Model_end_client extends utils_1.Base {
    /**
      c'est le client que l'on facture
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "end_client";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["label"] != undefined) {
            this["label"] = obj["label"].toString();
        }
        if (obj["applications"] != undefined && obj["applications"] != null && _.isArray(obj["applications"])) {
            this["applications"] = obj["applications"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
                else if (value._bsontype && value._bsontype === 'ObjectID') {
                    return `${value}`;
                }
            });
        }
        if (obj["admins"] != undefined && obj["admins"] != null && _.isArray(obj["admins"])) {
            this["admins"] = obj["admins"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
                else if (value._bsontype && value._bsontype === 'ObjectID') {
                    return `${value}`;
                }
            });
        }
        if (obj["licenceStore"] != undefined && obj["licenceStore"] != null && _.isArray(obj["licenceStore"])) {
            this["licenceStore"] = obj["licenceStore"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["licenceStore"](value);
                }
            });
        }
        if (obj["client_notices"] != undefined && obj["client_notices"] != null && _.isArray(obj["client_notices"])) {
            this["client_notices"] = obj["client_notices"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["notice_field"](value);
                }
            });
        }
    }
}
exports.Model_end_client = Model_end_client;
