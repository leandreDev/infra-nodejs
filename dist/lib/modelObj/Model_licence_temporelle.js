"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_licence_temporelle = void 0;
const Model_licence_1 = require("./Model_licence");
/**
  c'est une licence qui dure un certain temps
*/
class Model_licence_temporelle extends Model_licence_1.Model_licence {
    /**
      c'est une licence qui dure un certain temps
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "licence_temporelle";
        if (obj["validityStartDate"] != undefined) {
            this["validityStartDate"] = new Date(obj["validityStartDate"]);
        }
        if (obj["validityEndDate"] != undefined) {
            this["validityEndDate"] = new Date(obj["validityEndDate"]);
        }
        if (obj["licenceDuration"] != undefined) {
            this["licenceDuration"] = new Number(obj["licenceDuration"]).valueOf();
        }
        if (obj["licenceEndDate"] != undefined) {
            this["licenceEndDate"] = new Date(obj["licenceEndDate"]);
        }
    }
}
exports.Model_licence_temporelle = Model_licence_temporelle;
