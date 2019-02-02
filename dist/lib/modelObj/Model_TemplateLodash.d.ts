import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  template lodash + nom
*/
export declare class Model_TemplateLodash extends Base implements Interface.ITemplateLodash {
    /**
      template lodash + nom
    */
    constructor(obj?: any);
    _class: string;
    /**
nom du template
*/
    "name": string;
    /**
contenu du template
*/
    "template": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_TemplateLodash>;
}
