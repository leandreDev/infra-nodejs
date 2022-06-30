import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config r3 admin
*/
export declare class Model_application_configuration_r3_admin_seller extends Model_application_configuration implements Interface.Iapplication_configuration_r3_admin_seller {
    /**
      config r3 admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd
*/
    "bddUrl"?: string;
    /**
url du servie r3
*/
    "apiUrl"?: string;
    /**
url du service de fichiers (fso)
*/
    "fsoUrl"?: string;
}
