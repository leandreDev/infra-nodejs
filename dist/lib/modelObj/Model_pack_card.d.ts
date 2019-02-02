import * as Interface from "./Interfaces";
import { Model_application } from "./Model_application";
/**
  c'est un paquet de carte
*/
export declare class Model_pack_card extends Model_application implements Interface.Ipack_card {
    /**
      c'est un paquet de carte
    */
    constructor(obj?: any);
    _class: string;
    /**
l'url de l'image
*/
    "imageUrl"?: string;
    /**
nom de la compagnie dans l'infra de goshaba
*/
    "companyName"?: string;
    /**
l'id de la compagnie dans l'infra de goshaba
*/
    "companyId"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_pack_card>;
}
