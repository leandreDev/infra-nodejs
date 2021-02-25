"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
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
        /**
  l'url racine du service
  */
        this["urlBase"] = "$ENV.DOMAINE$$/";
        /**
  active le debug
  */
        this["debug"] = true;
        /**
  licence_well-known
  */
        this["licence_well-known"] = "$ENV.WELL_KNOWN";
        /**
  clef secrète de signature inter service
  */
        this["secretKey"] = "$ENV.SECRET";
        /**
  ip to bind
  */
        this["bindIp"] = "0.0.0.0";
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
            if (obj["publicAccess"]._class) {
                this["publicAccess"] = new Index[obj["publicAccess"]._class](obj["publicAccess"]);
            }
            else {
                this["publicAccess"] = new Index["url_role"](obj["publicAccess"]);
            }
        }
        if (obj["bindIp"] != undefined) {
            this["bindIp"] = obj["bindIp"].toString();
        }
        if (obj["headers"] != undefined && obj["headers"] != null && _.isArray(obj["headers"])) {
            this["headers"] = obj["headers"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
        if (obj["accessControlAllowOrigin"] != undefined && obj["accessControlAllowOrigin"] != null && _.isArray(obj["accessControlAllowOrigin"])) {
            this["accessControlAllowOrigin"] = obj["accessControlAllowOrigin"].map((value) => {
                return value.toString();
            });
        }
        if (obj["confServiceUrl"] != undefined) {
            this["confServiceUrl"] = obj["confServiceUrl"].toString();
        }
    }
}
exports.Model_service = Model_service;
