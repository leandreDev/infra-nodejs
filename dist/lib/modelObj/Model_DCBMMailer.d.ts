import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  configuration pour l'envoie d emails DCBM
*/
export declare class Model_DCBMMailer extends Base implements Interface.IDCBMMailer {
    /**
      configuration pour l'envoie d emails DCBM
    */
    constructor(obj?: any);
    _class: string;
    /**
adresse mail affiché lorsque l user reçoie le mail
*/
    "senderEMail"?: string;
    /**
nom affiche dans les en_tete du  mail
*/
    "senderName"?: string;
    /**
adresse du site , exemple dcbm.justeplug.info en dev ou dcbm.justplug.fr en prod
*/
    "dcbmBaseUrl"?: string;
    /**
url de l'api sengGrid pour DCBM
*/
    "dcbmSendgridApiUrl"?: string;
    /**
la adresse mail qui reçoi le mails de contact
*/
    "dcbmContactMail"?: string;
    /**
id du template pour le resset du password
*/
    "dcbm_group_resset_password"?: string;
    /**
id du template du mail de bienvenue
*/
    "dcbm_group_welcome"?: string;
    /**
mail de contact
*/
    "dcbm_contact_to_user"?: string;
    /**
mail pour DCBM avec le contenu de un mail de contact
*/
    "dcbm_contact_to_dcbm"?: string;
    /**
mail de bienvenu d un nouvelle admin
*/
    "dcbm_group_welcome_admin_templateId": string;
}
