import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
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
}
