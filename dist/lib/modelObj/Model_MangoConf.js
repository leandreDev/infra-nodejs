"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_MangoConf = void 0;
const utils_1 = require("@leandredev/utils");
/**
  Données de configuration
*/
class Model_MangoConf extends utils_1.Base {
    /**
      Données de configuration
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "MangoConf";
        /**
  l'id d'utilisateur pour le compte QBP dans mangopay,  cette utilisatuer est celui qui reçois les fonds des différents transactions la valeur par default est celle du sandbox
  */
        this["qbpUserIdInMangoPay"] = "108463446";
        /**
  l'id du portefeuille virtuelle pour le compte QBP dans mangopay,  cette portefeuille est celui qui reçois les fonds des différents transactions la valeur par default est celle du sandbox
  */
        this["qbpWalletIdInMangoPay"] = "108463447";
        if (obj["clientId"] != undefined) {
            this["clientId"] = obj["clientId"].toString();
        }
        if (obj["version"] != undefined) {
            this["version"] = obj["version"].toString();
        }
        if (obj["apiKey"] != undefined) {
            this["apiKey"] = obj["apiKey"].toString();
        }
        if (obj["serverUrl"] != undefined) {
            this["serverUrl"] = obj["serverUrl"].toString();
        }
        if (obj["paymentRedirectUrl"] != undefined) {
            this["paymentRedirectUrl"] = obj["paymentRedirectUrl"].toString();
        }
        if (obj["clientUserId"] != undefined) {
            this["clientUserId"] = obj["clientUserId"].toString();
        }
        if (obj["qbpUserIdInMangoPay"] != undefined) {
            this["qbpUserIdInMangoPay"] = obj["qbpUserIdInMangoPay"].toString();
        }
        if (obj["qbpWalletIdInMangoPay"] != undefined) {
            this["qbpWalletIdInMangoPay"] = obj["qbpWalletIdInMangoPay"].toString();
        }
    }
}
exports.Model_MangoConf = Model_MangoConf;
