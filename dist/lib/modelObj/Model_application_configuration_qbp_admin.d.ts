import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config qbp admin
*/
export declare class Model_application_configuration_qbp_admin extends Model_application_configuration implements Interface.Iapplication_configuration_qbp_admin {
    /**
      config qbp admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd
*/
    "qbpBddUrl"?: string;
    /**
url du service qbp
*/
    "qbpAdminService"?: string;
    /**
url du service fso
*/
    "qbpFsoUrl"?: string;
}
