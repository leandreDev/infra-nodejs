import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  règle de sécurité relative aux url
*/
export declare class Model_url_role extends Base implements Interface.Iurl_role {
    /**
      règle de sécurité relative aux url
    */
    constructor(obj?: any);
    _class: string;
    /**
sécurité du verbe get
*/
    "_$get"?: Interface.Iroute_role[];
    /**
règle de sécurité des post
*/
    "_$post"?: Interface.Iroute_role[];
    /**
règle de sécurité du verbe delete
*/
    "_$delete"?: Interface.Iroute_role[];
    /**
règle de sécurité du verbe update
*/
    "_$put"?: Interface.Iroute_role[];
    /**
règle de sécurité du verbe patch
*/
    "_$patch"?: Interface.Iroute_role[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_url_role>;
}
