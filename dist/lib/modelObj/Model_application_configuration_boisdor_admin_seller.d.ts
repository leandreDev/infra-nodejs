import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config boisdor admin
*/
export declare class Model_application_configuration_boisdor_admin_seller extends Model_application_configuration implements Interface.Iapplication_configuration_boisdor_admin_seller {
    /**
      config boisdor admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service seller
*/
    "boisdorSellerApi"?: string;
    /**
boisdorBddUrl
*/
    "boisdorBddUrl"?: string;
    /**
url du service de fso
*/
    "fsoUrl"?: string;
    /**
url api public
*/
    "apiPublicUrl"?: string;
    /**
url du service d'envoie de mail
*/
    "boisdorMailService"?: string;
}
