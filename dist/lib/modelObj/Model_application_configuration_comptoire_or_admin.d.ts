import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  cond des comptoire de l'or admin
*/
export declare class Model_application_configuration_comptoire_or_admin extends Model_application_configuration implements Interface.Iapplication_configuration_comptoire_or_admin {
    /**
      cond des comptoire de l'or admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service d'api
*/
    "bddApiUrl"?: string;
    /**
url du service métier
*/
    "serviceUrl"?: string;
}
