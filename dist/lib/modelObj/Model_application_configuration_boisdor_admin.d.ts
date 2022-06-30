import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config boisdor admin
*/
export declare class Model_application_configuration_boisdor_admin extends Model_application_configuration implements Interface.Iapplication_configuration_boisdor_admin {
    /**
      config boisdor admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd
*/
    "boisdorBddUrl"?: string;
    /**
url du service boisdor
*/
    "boisdorAdminService"?: string;
    /**
url du service fso
*/
    "fsoUrl"?: string;
    /**
boisdorMailService
*/
    "boisdorMailService"?: string;
}
