import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
export declare class Model_service_webAppConf extends Model_service implements Interface.Iservice_webAppConf {
    /**
      permet de générer les fichier de conf des app (css, js, ...)
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd de l'infra
*/
    "infraBddUrl": string;
    /**
url de la bdd du sso
*/
    "ssoBddUrl": string;
    /**
url  de l openid-configuration du sso
*/
    "ssoUrl"?: string;
    /**
ssoIssuer
*/
    "ssoIssuer"?: string;
    /**
url du serveur de licence
*/
    "configurationUrl"?: string;
}
