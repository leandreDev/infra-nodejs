"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_mailtoinfra = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service qui permet de configurer l'authentification a partir d'un mail
*/
class Model_service_mailtoinfra extends Model_service_1.Model_service {
    /**
      service qui permet de configurer l'authentification a partir d'un mail
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_mailtoinfra";
        if (obj["mailsMapping"] != undefined && obj["mailsMapping"] != null && _.isArray(obj["mailsMapping"])) {
            this["mailsMapping"] = obj["mailsMapping"].map((value) => {
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
exports.Model_service_mailtoinfra = Model_service_mailtoinfra;
