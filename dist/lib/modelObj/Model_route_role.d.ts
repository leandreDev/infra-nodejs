import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
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
}
