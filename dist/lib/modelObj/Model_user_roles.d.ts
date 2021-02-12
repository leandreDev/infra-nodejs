import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
/**
  paire utilisateurs role
*/
export declare class Model_user_roles extends Base implements Interface.Iuser_roles {
    /**
      paire utilisateurs role
    */
    constructor(obj?: any);
    _class: string;
    /**
utilisateur
*/
    "user"?: string;
    /**
liste des roles de l'utilisateur
*/
    "roles"?: string[];
}
