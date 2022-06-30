import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service métier de QBP
*/
export declare class Model_r3_service extends Model_service implements Interface.Ir3_service {
    /**
      service métier de QBP
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd
*/
    "bddUrl"?: string;
    /**
url su service de bdd
*/
    "ssoBddUrl"?: string;
    /**
url de connexion a la bd  infra
*/
    "infraBddUrl"?: string;
    /**
url de l'api du sso
*/
    "ssoApiUrl"?: string;
    /**
licenceApiUrl
*/
    "licenceApiUrl"?: string;
    /**
client_id sso
*/
    "client_id"?: string;
    /**
client_secret pou rle sso
*/
    "client_secret"?: string;
    /**
configuration pour l'envoie de mails
*/
    "SendGridConf"?: Interface.IR3Mailer;
    /**
url du rip pdf
*/
    "pdfRipUrl": string;
    /**
url de l application de rendu pdf
*/
    "pdfAppUrl": string;
    /**
url du fso r3
*/
    "fsoUrl": string;
    /**
configuration de la génération des partnaires
*/
    "parntaireConfig"?: Interface.IParnerDeployConf;
}
