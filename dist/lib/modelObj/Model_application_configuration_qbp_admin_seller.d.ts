import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config qbp admin
*/
export declare class Model_application_configuration_qbp_admin_seller extends Model_application_configuration implements Interface.Iapplication_configuration_qbp_admin_seller {
    /**
      config qbp admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service seller
*/
    "qbpSellerApi"?: string;
    /**
qbpBddUrl
*/
    "qbpBddUrl"?: string;
    /**
url du service de fso
*/
    "qbpFsoUrl"?: string;
}
