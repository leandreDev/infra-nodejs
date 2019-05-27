import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service de tirage au sort de polo
*/
export declare class Model_service_polo_celio extends Model_service implements Interface.Iservice_polo_celio {
    /**
      service de tirage au sort de polo
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bdd
*/
    "bdd_url"?: string;
    /**
nombre maximum de gagnan
*/
    "maxNumberOfWinner": number;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_polo_celio>;
}
