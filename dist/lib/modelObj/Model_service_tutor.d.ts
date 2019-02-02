import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service de gestion des message tutoré
*/
export declare class Model_service_tutor extends Model_service implements Interface.Iservice_tutor {
    /**
      service de gestion des message tutoré
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bd a utiliser
*/
    "apiSession": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_tutor>;
}
