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
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_signin>;
}
