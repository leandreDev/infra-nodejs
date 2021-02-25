import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config qbp
*/
export declare class Model_application_configuration_qbp extends Model_application_configuration implements Interface.Iapplication_configuration_qbp {
    /**
      config qbp
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service client de qbp
*/
    "qbpCustomerApi"?: string;
    /**
url de lapi de bdd qbp
*/
    "qbpBddUrl"?: string;
    /**
url du service fso qbp
*/
    "fsoUrl"?: string;
    /**
données de l'api mangopay
*/
    "mangoConf"?: Interface.IMangoConf;
}
