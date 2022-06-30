import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  Configuration de connexion BigBen
*/
export declare class Model_BigBenConf extends Base implements Interface.IBigBenConf {
    /**
      Configuration de connexion BigBen
    */
    constructor(obj?: any);
    _class: string;
    /**
User
*/
    "u": string;
    /**
Password encrypté
*/
    "p": string;
    /**
Clé de l'api
*/
    "k": string;
    /**
Url de l'api
*/
    "apiUrl": string;
    /**
Clé API pour l'api MACRO qui permet de passer des commande
*/
    "marcoApiKey"?: string;
    /**
URL de l'api macro
*/
    "marcoApiUrl"?: string;
    /**
Switch entre ancienne api et nouvelle api
*/
    "isMarcoApiActive"?: boolean;
}
