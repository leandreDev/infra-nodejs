"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_facebook = void 0;
const _ = require("lodash");
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
*/
class Model_passport_strategie_facebook extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_facebook";
        /**
  lib
  */
        this["lib"] = "passport-facebook";
        /**
  la class de stratégie à appeler dans la lib
  */
        this["strategieName"] = "Strategy";
        if (obj["lib"] != undefined) {
            this["lib"] = obj["lib"].toString();
        }
        if (obj["strategieName"] != undefined) {
            this["strategieName"] = obj["strategieName"].toString();
        }
        if (obj["clientID"] != undefined) {
            this["clientID"] = obj["clientID"].toString();
        }
        if (obj["clientSecret"] != undefined) {
            this["clientSecret"] = obj["clientSecret"].toString();
        }
        if (obj["callbackURL"] != undefined) {
            this["callbackURL"] = obj["callbackURL"].toString();
        }
        if (obj["scope"] != undefined && obj["scope"] != null && _.isArray(obj["scope"])) {
            this["scope"] = obj["scope"].map((value) => {
                return value.toString();
            });
        }
        if (obj["profileFields"] != undefined && obj["profileFields"] != null && _.isArray(obj["profileFields"])) {
            this["profileFields"] = obj["profileFields"].map((value) => {
                return value.toString();
            });
        }
        if (obj["enableProof"] != undefined) {
            this["enableProof"] = new Boolean(obj["enableProof"]).valueOf();
        }
    }
}
exports.Model_passport_strategie_facebook = Model_passport_strategie_facebook;
