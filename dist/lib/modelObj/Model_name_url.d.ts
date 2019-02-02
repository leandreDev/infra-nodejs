import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  c'est une paire nom url
*/
export declare class Model_name_url extends Base implements Interface.Iname_url {
    /**
      c'est une paire nom url
    */
    constructor(obj?: any);
    _class: string;
    /**
nom du service
*/
    "name": string;
    /**
url du service
*/
    "url": string;
    /**
Id de l'objet
*/
    "refId"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_name_url>;
}
