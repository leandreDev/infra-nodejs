import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service métier de DCBM
*/
export declare class Model_dcbm_service extends Model_service implements Interface.Idcbm_service {
    /**
      service métier de DCBM
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd
*/
    "bddUrl": string;
    /**
url su service de bdd
*/
    "ssoBddUrl": string;
    /**
url de connexion a la bd  infra
*/
    "infraBddUrl": string;
    /**
url de l'api du sso
*/
    "ssoApiUrl": string;
    /**
licenceApiUrl
*/
    "licenceApiUrl": string;
    /**
client_id sso
*/
    "client_id": string;
    /**
client_secret pou rle sso
*/
    "client_secret": string;
    /**
configuration pour l'envoie de mails
*/
    "SendGridConf": Interface.IDCBMMailer;
    /**
url du rip pdf
*/
    "pdfRipUrl": string;
    /**
url de l application de rendu pdf
*/
    "pdfAppUrl": string;
    /**
url du fso DCBM
*/
    "fsoUrl": string;
    /**
domaine autorisé pour la redirection lors des récupération de mot de passe (ex: jusplug.info)
*/
    "authorizedDomaine": string[];
    /**
url du site admin
*/
    "adminSiteUrl": string;
}
