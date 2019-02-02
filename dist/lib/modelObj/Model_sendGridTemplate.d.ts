import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  template send grid
*/
export declare class Model_sendGridTemplate extends Base implements Interface.IsendGridTemplate {
    /**
      template send grid
    */
    constructor(obj?: any);
    _class: string;
    /**
langue du template
*/
    "lang": string;
    /**
id du template de mail chez sendGrid
*/
    "templateId": string;
    /**
liste des substitutions a réaliser sur le template
*/
    "parametre"?: Interface.Iname_value[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_sendGridTemplate>;
}
