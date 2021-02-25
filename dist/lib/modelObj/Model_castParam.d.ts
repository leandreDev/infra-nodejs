import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  paramètre d'une querry qui doit être casté
*/
export declare class Model_castParam extends Base implements Interface.IcastParam {
    /**
      paramètre d'une querry qui doit être casté
    */
    constructor(obj?: any);
    _class: string;
    /**
paramètre a ajouter a l'objet ctx.params
*/
    "paramName": string;
    /**
type de paramétre
*/
    "type"?: string;
    /**
contexte a caster
*/
    "param": string;
}
