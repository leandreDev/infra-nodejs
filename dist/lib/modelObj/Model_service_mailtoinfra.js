"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["mailsMapping"] != null && target["mailsMapping"] != undefined) {
                target["mailsMapping"].forEach((_mailsMapping, index) => {
                    promArr.push(Index["mail_connexion_conf"].check(_mailsMapping, isCompleteObj, path + "mailsMapping.")
                        .catch((err) => {
                        throw new Error(path + "mailsMapping index: " + index + "is not mail_connexion_conf");
                    }));
                    if (_mailsMapping._class != null && _mailsMapping._class != undefined) {
                        promArr.push(Index[_mailsMapping._class].check(_mailsMapping, isCompleteObj, path + "mailsMapping.")
                            .catch((err) => {
                            throw new Error(path + "mailsMapping index: " + index + "is not a " + _mailsMapping._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_mailtoinfra.check(target, true, path).then(() => {
            return new Model_service_mailtoinfra(target);
        });
    }
}
exports.Model_service_mailtoinfra = Model_service_mailtoinfra;
//# sourceMappingURL=Model_service_mailtoinfra.js.map