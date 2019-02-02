import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  identification du service
*/
export declare class Model_service extends Base implements Interface.Iservice {
    /**
      identification du service
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom du service
*/
    "name"?: string;
    /**
l'url racine du service
*/
    "urlBase"?: string;
    /**
le port de publication
*/
    "port"?: number;
    /**
active le debug
*/
    "debug"?: boolean;
    /**
licence_well-known
*/
    "licence_well-known"?: string;
    /**
clef secrète de signature inter service
*/
    "secretKey"?: string;
    /**
paramétrage des accès public
*/
    "publicAccess"?: Interface.Iurl_role;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service>;
}
