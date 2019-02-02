import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  paire clef valeur
*/
export declare class Model_name_value extends Base implements Interface.Iname_value {
    /**
      paire clef valeur
    */
    constructor(obj?: any);
    _class: string;
    /**
nom de la clef
*/
    "key": string;
    /**
valeur associé a la clef
*/
    "value"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_name_value>;
}
