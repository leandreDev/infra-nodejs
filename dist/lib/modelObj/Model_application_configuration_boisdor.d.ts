import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config boisdor
*/
export declare class Model_application_configuration_boisdor extends Model_application_configuration implements Interface.Iapplication_configuration_boisdor {
    /**
      config boisdor
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service client de boisdor
*/
    "boisdorCustomerApi"?: string;
    /**
url de lapi de bdd boisdor
*/
    "boisdorBddUrl"?: string;
    /**
url du service fso boisdor
*/
    "fsoUrl"?: string;
    /**
url de l api de paiement
*/
    "payementUrl"?: string;
}
