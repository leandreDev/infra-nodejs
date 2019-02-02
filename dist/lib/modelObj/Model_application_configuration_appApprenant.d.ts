import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  c'est la configuration d'une application Apprenant
*/
export declare class Model_application_configuration_appApprenant extends Model_application_configuration implements Interface.Iapplication_configuration_appApprenant {
    /**
      c'est la configuration d'une application Apprenant
    */
    constructor(obj?: any);
    _class: string;
    /**
url de service de bdd du forum
*/
    "forumUrl"?: string;
    /**
url du file service pour le forum
*/
    "fileServiceUrl"?: string;
    /**
url du file service du drive
*/
    "URL_FileService"?: string;
    /**
c'est l'url de la base de donnée de l'application
*/
    "configurationUrlDb": string;
    /**
l'url racine des services
*/
    "urlBase": string;
    /**
l'url du service de like et note
*/
    "likeServiceUrl": string;
    /**
template générique a appliquer aux enregistrements
*/
    "aclTemplate"?: Interface.I_acl;
    /**
url du service trainning course
*/
    "trainingCourseServiceUrl": string;
    /**
url du soketio avec le namespace
*/
    "syncSoketioUrl": string;
    /**
le path d'acces pour le soket.io
*/
    "syncSoketioPath": string;
    /**
url du service de video call
*/
    "tutorVideoCallUrl": string;
    /**
url du service de tutora
*/
    "tutorServiceUrl": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_appApprenant>;
}
