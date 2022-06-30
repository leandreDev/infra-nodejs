"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_aclIdentity = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  description d'une identit   pour l'acl
*/
class Model_aclIdentity extends utils_1.Base {
    /**
      description d'une identit   pour l'acl
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "aclIdentity";
        if (obj["end_client"] != undefined) {
            if (_.isString(obj["end_client"])) {
                this["end_client"] = obj["end_client"];
            }
            else if (obj["end_client"]._id) {
                this["end_client"] = obj["end_client"]._id;
            }
            else if (obj["end_client"]._bsontype && (obj["end_client"]._bsontype === 'ObjectID')) {
                this["end_client"] = obj["end_client"];
            }
        }
        if (obj["applicaton_instance"] != undefined) {
            if (_.isString(obj["applicaton_instance"])) {
                this["applicaton_instance"] = obj["applicaton_instance"];
            }
            else if (obj["applicaton_instance"]._id) {
                this["applicaton_instance"] = obj["applicaton_instance"]._id;
            }
            else if (obj["applicaton_instance"]._bsontype && (obj["applicaton_instance"]._bsontype === 'ObjectID')) {
                this["applicaton_instance"] = obj["applicaton_instance"];
            }
        }
        if (obj["role"] != undefined) {
            this["role"] = obj["role"].toString();
        }
        if (obj["user"] != undefined) {
            if (_.isString(obj["user"])) {
                this["user"] = obj["user"];
            }
            else if (obj["user"]._id) {
                this["user"] = obj["user"]._id;
            }
            else if (obj["user"]._bsontype && (obj["user"]._bsontype === 'ObjectID')) {
                this["user"] = obj["user"];
            }
        }
    }
}
exports.Model_aclIdentity = Model_aclIdentity;
