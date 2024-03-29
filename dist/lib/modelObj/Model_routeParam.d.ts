import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  paramètre d'une route
*/
export declare class Model_routeParam extends Base implements Interface.IrouteParam {
    /**
      paramètre d'une route
    */
    constructor(obj?: any);
    _class: string;
    /**
paramètre de la route
*/
    "paramName": string;
    /**
type de paramétre
*/
    "type"?: string;
}
