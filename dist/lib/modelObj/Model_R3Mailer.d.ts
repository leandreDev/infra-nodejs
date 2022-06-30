import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  configurationpour l'envoie d emails R3
*/
export declare class Model_R3Mailer extends Base implements Interface.IR3Mailer {
    /**
      configurationpour l'envoie d emails R3
    */
    constructor(obj?: any);
    _class: string;
    /**
adresse mail affiché lorsque l user recoie le mail
*/
    "senderEMail"?: string;
    /**
nom affiche dans les en_tete du  mail
*/
    "senderName"?: string;
    /**
adresse du site , exemple r3.justeplug.info en dev ou r3.justeplug.fr en prod
*/
    "r3BaseUrl"?: string;
    /**
url de l'api sengGrid pour R3
*/
    "r3SendgridApiUrl"?: string;
    /**
la adresse mail qui recoi le mails de contact
*/
    "r3ContactMail"?: string;
    /**
id du template pour le resset du password
*/
    "r3_group_resset_password"?: string;
    /**
id du template du mail de bienvenue
*/
    "r3_group_welcome"?: string;
    /**
mail de contact
*/
    "r3_contact_to_user"?: string;
    /**
mail pour R3 avec le contenu de un mail de contact
*/
    "r3_contact_to_r3"?: string;
    /**
template de mail pour envoyer les invitaton pour creer son compte dans la page du partner
*/
    "R3_prescriptor_invitation"?: string;
    /**
le client a fini l'analisys et un envoie un mail a R3 et au partner
*/
    "R3_analisys_end_to_r3_and_partner"?: string;
    /**
on signale au client qu eson pdf est pret
*/
    "R3_analisys_end_to_user"?: string;
    /**
on informe a un partenaire que son admin est pret et qu'il peut sy conecter
*/
    "R3_partner_admin_created"?: string;
}
