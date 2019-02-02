import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  paire route et role
*/
export declare class Model_route_role extends Base implements Interface.Iroute_role {
    /**
      paire route et role
    */
    constructor(obj?: any);
    _class: string;
    /**
route à protéger
*/
    "route"?: string;
    /**
liste des roles
*/
    "role"?: string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_route_role>;
}
