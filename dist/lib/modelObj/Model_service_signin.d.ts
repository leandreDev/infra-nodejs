import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service d'enregistrement
*/
export declare class Model_service_signin extends Model_service implements Interface.Iservice_signin {
    /**
      service d'enregistrement
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la collection des users
*/
    "userUrl": string;
    /**
mailResetUrl
*/
    "mailResetUrl": string;
    /**
mailInfoUrl
*/
    "mailInfoUrl": string;
    /**
mailAccountCreatedUrl
*/
    "mailAccountCreatedUrl": string;
    /**
nombre de jour de validité d'une demande de reset de password
*/
    "durationResetDay": number;
    /**
url de la collection des user de l'app
*/
    "userAppUrl": string;
    /**
url des profiles des users
*/
    "userProfileUrl": string;
    /**
url du service de bd de la bdd du sso
*/
    "bddSsoUrl"?: string;
    /**
url du service de mail
*/
    "mailerUrl"?: string;
    /**
nom a faire apparaitre dans les mails
*/
    "mailerName"?: string;
    /**
email d'envoie des mail
*/
    "mailerMail"?: string;
    /**
mail de demande de reset de mot de pass
*/
    "resetMail"?: string;
    /**
mail d'information de l'update d'un compte
*/
    "updateMail"?: string;
}
