import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  décrit les régles de paramètre des servies
*/
export declare class Model_service_access extends Base implements Interface.Iservice_access {
    /**
      décrit les régles de paramètre des servies
    */
    constructor(obj?: any);
    _class: string;
    /**
nom de la configuration
*/
    "name"?: string;
    /**
service au qu'elle s'applique la configuration
*/
    "service"?: string;
    /**
liste les règles d’accès aux routes d'un service
*/
    "httAccess"?: Interface.Iurl_role;
}
