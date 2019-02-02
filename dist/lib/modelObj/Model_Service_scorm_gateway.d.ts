import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service passerelle d'un package scorm vers l'interne
*/
export declare class Model_Service_scorm_gateway extends Model_service implements Interface.IService_scorm_gateway {
    /**
      service passerelle d'un package scorm vers l'interne
    */
    constructor(obj?: any);
    _class: string;
    /**
clef privé a mettre dans le package scorm
*/
    "privateKey": string;
    /**
id du end client
*/
    "endClientId": string;
    /**
url du service de signin
*/
    "signinUrl": string;
    /**
url du service de licence
*/
    "licenceUrl": string;
    /**
templateUser
*/
    "templateUser": any;
    /**
templateProfileUser
*/
    "templateProfileUser": any;
    /**
apiUrl
*/
    "apiUrl"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_Service_scorm_gateway>;
}
