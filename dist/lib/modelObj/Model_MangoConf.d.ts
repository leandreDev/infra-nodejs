import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
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
}
