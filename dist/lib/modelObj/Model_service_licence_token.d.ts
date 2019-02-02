import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  c'est un service en charge de valider les licences et retourner les configurations des applications web
*/
export declare class Model_service_licence_token extends Model_service implements Interface.Iservice_licence_token {
    /**
      c'est un service en charge de valider les licences et retourner les configurations des applications web
    */
    constructor(obj?: any);
    _class: string;
    /**
l'url du la base hébergeant les licences
*/
    "licenceUrl"?: string;
    /**
l'url de la base contenant les instances d'application
*/
    "application_instanceUrl"?: string;
    /**
durée du token d’accès aux services
*/
    "tockenDuration"?: number;
    /**
l'url de la configuration du serveur sso
*/
    "sso_well-known"?: string;
    /**
liste des certificats
*/
    "certificates"?: string[];
    /**
url de la collection endClient
*/
    "end_clientUrl"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_licence_token>;
}
