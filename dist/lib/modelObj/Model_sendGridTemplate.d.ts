import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
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
    /**
dynamic_template_data de send grid
*/
    "dynamic_template_data"?: Interface.Iname_value[];
}
