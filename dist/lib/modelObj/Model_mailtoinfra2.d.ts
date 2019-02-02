import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
*/
export declare class Model_mailtoinfra2 extends Model_service implements Interface.Imailtoinfra2 {
    /**
      retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la base de donnée du sso
*/
    "ssoBdUrl": string;
    /**
url du service de base de donnée de l'infra
*/
    "infraBdUrl": string;
    /**
id de l'application savy
*/
    "savyLearnerId"?: string;
    /**
confMapping
*/
    "confMapping"?: Interface.Imail_connexion_conf[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mailtoinfra2>;
}
