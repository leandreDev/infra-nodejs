import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  configuration générale application celio
*/
export declare class Model_application_configuration_celio extends Model_application_configuration implements Interface.Iapplication_configuration_celio {
    /**
      configuration générale application celio
    */
    constructor(obj?: any);
    _class: string;
    /**
url des services de fid
*/
    "fidServiceUrl": string;
    /**
url du service de QCM
*/
    "qcmServiceUrl"?: string;
    /**
url de la bdd fid
*/
    "FidBDDUrl"?: string;
    /**
url de la BDD qcm
*/
    "QcmBDDUrl"?: string;
}
