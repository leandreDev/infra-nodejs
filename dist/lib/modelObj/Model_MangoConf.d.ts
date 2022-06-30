import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  Données de configuration
*/
export declare class Model_MangoConf extends Base implements Interface.IMangoConf {
    /**
      Données de configuration
    */
    constructor(obj?: any);
    _class: string;
    /**
Identifiant client spécifié au moment de l'activation de compte mango
*/
    "clientId": string;
    /**
API MangoPay Version
*/
    "version": string;
    /**
Clé secrète de l'API communiquée à l'activation de compte
*/
    "apiKey": string;
    /**
url de base de l'api mango
*/
    "serverUrl": string;
    /**
url de redirection après paiement
*/
    "paymentRedirectUrl"?: string;
    /**
UserId propriétaire de l'instance mangopay
*/
    "clientUserId"?: string;
    /**
l'id d'utilisateur pour le compte QBP dans mangopay,  cette utilisatuer est celui qui reçois les fonds des différents transactions la valeur par default est celle du sandbox
*/
    "qbpUserIdInMangoPay": string;
    /**
l'id du portefeuille virtuelle pour le compte QBP dans mangopay,  cette portefeuille est celui qui reçois les fonds des différents transactions la valeur par default est celle du sandbox
*/
    "qbpWalletIdInMangoPay": string;
}
