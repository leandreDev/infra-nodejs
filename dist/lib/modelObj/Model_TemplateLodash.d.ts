import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
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
}
