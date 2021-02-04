import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  conf petit_moulin_admin
*/
export declare class Model_application_configuration_petit_moulin_admin extends Model_application_configuration implements Interface.Iapplication_configuration_petit_moulin_admin {
    /**
      conf petit_moulin_admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service
*/
    "serviceUrl"?: string;
    /**
url de la base de donnée
*/
    "bddUrl"?: string;
    /**
url du filesystem
*/
    "fsoUrl"?: string;
}
