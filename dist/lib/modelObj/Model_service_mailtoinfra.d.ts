import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service qui permet de configurer l'authentification a partir d'un mail
*/
export declare class Model_service_mailtoinfra extends Model_service implements Interface.Iservice_mailtoinfra {
    /**
      service qui permet de configurer l'authentification a partir d'un mail
    */
    constructor(obj?: any);
    _class: string;
    /**
liste des configuration attacher a un mail
*/
    "mailsMapping"?: Interface.Imail_connexion_conf[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_mailtoinfra>;
}
