import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  c'est le couple application configuration
*/
export declare class Model_application_instance extends Base implements Interface.Iapplication_instance {
    /**
      c'est le couple application configuration
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom du couple app/config
*/
    "name"?: string;
    /**
l'application représenté
*/
    "application"?: string;
    /**
la configuration de l'application
*/
    "configuration"?: string;
    /**
le end_client de l aplli
*/
    "end_client": string;
    /**
le compte oidc du client pour la connection
*/
    "oidc_client": string;
    /**
la css root de l'app
*/
    "css"?: string;
}
