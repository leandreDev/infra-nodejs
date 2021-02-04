import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config de l'app minds up
*/
export declare class Model_AppConf_minds_up extends Model_application_configuration implements Interface.IAppConf_minds_up {
    /**
      config de l'app minds up
    */
    constructor(obj?: any);
    _class: string;
    /**
titre de l'introduction
*/
    "introTitle"?: string;
    /**
texte de l'introduction
*/
    "introText"?: string;
    /**
url de la video d intro sur youtub
*/
    "videoUrl"?: string;
    /**
texte à afficher pour valider la rgpd
*/
    "rgpd"?: string;
    /**
url du service metier mindsUp
*/
    "serviceMindsUpUrl": string;
    /**
indique si l'on peut observer son manager
*/
    "managerObservable"?: boolean;
    /**
défini si le manager peut créer un échange sur lui même
*/
    "managerAutoExchange"?: boolean;
    /**
url de l'api de la bdd minds Up
*/
    "apiUrl": string;
    /**
definit si le module 360 est actif
*/
    "module360"?: boolean;
    /**
définie si le module repo est accéssible
*/
    "moduleRepo"?: boolean;
    /**
active la partie progression
*/
    "moduleProgress"?: boolean;
    /**
liste des langues disponibles
*/
    "lang"?: Interface.Iname_value[];
    /**
force les collaborateurs des 360 a être anonyme
*/
    "collaborateurAnonyme"?: boolean;
    /**
email validation pour l'ajout de nouveau utilisateur
*/
    "emailValidator"?: string;
    /**
message d'erreur pour le validateur de mail
*/
    "emailValidatorErrorMessage"?: string;
}
