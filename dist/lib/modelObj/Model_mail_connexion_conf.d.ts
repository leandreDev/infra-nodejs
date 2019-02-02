import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  associe un mail a une configuration de connexion sso+ app
*/
export declare class Model_mail_connexion_conf extends Base implements Interface.Imail_connexion_conf {
    /**
      associe un mail a une configuration de connexion sso+ app
    */
    constructor(obj?: any);
    _class: string;
    /**
le patern du mail a matcher
*/
    "mailPatern"?: string;
    /**
clientId du sso
*/
    "clientId"?: string;
    /**
configuration de la redirection du sso
*/
    "redirectUri"?: string;
    /**
end_client
*/
    "end_client"?: string;
    /**
application_instance
*/
    "application_instance"?: string;
    /**
url du service de licence
*/
    "licence_service"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mail_connexion_conf>;
}
