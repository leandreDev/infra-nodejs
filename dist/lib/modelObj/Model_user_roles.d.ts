import * as Interface from "./Interfaces";
import { Base } from "utils";
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
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_user_roles>;
}
