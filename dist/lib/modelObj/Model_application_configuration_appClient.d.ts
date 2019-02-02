import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  c'est la configuration d'une application Client
*/
export declare class Model_application_configuration_appClient extends Model_application_configuration implements Interface.Iapplication_configuration_appClient {
    /**
      c'est la configuration d'une application Client
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bd de l'application
*/
    "configurationUrlDb": string;
    /**
url racine des services
*/
    "urlBase": string;
    /**
url du service d'enregistrement d'utilisateur
*/
    "signinUrl": string;
    /**
url du service de gestion des sessions
*/
    "serviceSessionUrl": string;
    /**
url du service d'acces au info client
*/
    "clientServiceUrl": string;
    /**
template des acl
*/
    "aclTemplate"?: Interface.I_acl;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_appClient>;
}
