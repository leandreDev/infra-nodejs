import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  description d'une identit   pour l'acl
*/
export declare class Model_aclIdentity extends Base implements Interface.IaclIdentity {
    /**
      description d'une identit   pour l'acl
    */
    constructor(obj?: any);
    _class: string;
    /**
end_client ayant droit
*/
    "end_client"?: string;
    /**
application instance ayant droit
*/
    "applicaton_instance"?: string;
    /**
r  le ayant droit
*/
    "role"?: string;
    /**
utilisateur ayant droit
*/
    "user"?: string;
}
