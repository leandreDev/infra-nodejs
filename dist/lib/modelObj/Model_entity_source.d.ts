import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  association d'une entité et de l'url de son service
*/
export declare class Model_entity_source extends Base implements Interface.Ientity_source {
    /**
      association d'une entité et de l'url de son service
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service
*/
    "url"?: string;
    /**
nom de l'entité
*/
    "entityName"?: string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_entity_source>;
}
