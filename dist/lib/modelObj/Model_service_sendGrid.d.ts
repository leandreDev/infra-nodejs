import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  permet d'envoyer des mail via l'api send grid v3
*/
export declare class Model_service_sendGrid extends Model_service implements Interface.Iservice_sendGrid {
    /**
      permet d'envoyer des mail via l'api send grid v3
    */
    constructor(obj?: any);
    _class: string;
    /**
la clef d'api de sendgrid
*/
    "sendGridApiKey": string;
    /**
url de la collection de message pour les sauvegarder
*/
    "messageUrl": string;
    /**
l'url de la collection de user
*/
    "userUrl": string;
    /**
liste des templates
*/
    "templates"?: string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_sendGrid>;
}
