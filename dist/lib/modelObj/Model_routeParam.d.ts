import * as Interface from "./Interfaces";
import { Base } from "utils";
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
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_routeParam>;
}
