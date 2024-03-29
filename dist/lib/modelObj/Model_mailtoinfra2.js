"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mailtoinfra2 = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
*/
class Model_mailtoinfra2 extends Model_service_1.Model_service {
    /**
      retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mailtoinfra2";
        if (obj["ssoBdUrl"] != undefined) {
            this["ssoBdUrl"] = obj["ssoBdUrl"].toString();
        }
        if (obj["infraBdUrl"] != undefined) {
            this["infraBdUrl"] = obj["infraBdUrl"].toString();
        }
        if (obj["savyLearnerId"] != undefined) {
            if (_.isString(obj["savyLearnerId"])) {
                this["savyLearnerId"] = obj["savyLearnerId"];
            }
            else if (obj["savyLearnerId"]._id) {
                this["savyLearnerId"] = obj["savyLearnerId"]._id;
            }
            else if (obj["savyLearnerId"]._bsontype && (obj["savyLearnerId"]._bsontype === 'ObjectID')) {
                this["savyLearnerId"] = obj["savyLearnerId"];
            }
        }
        if (obj["confMapping"] != undefined && obj["confMapping"] != null && _.isArray(obj["confMapping"])) {
            this["confMapping"] = obj["confMapping"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["mail_connexion_conf"](value);
                }
            });
        }
    }
}
exports.Model_mailtoinfra2 = Model_mailtoinfra2;
