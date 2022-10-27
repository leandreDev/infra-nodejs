import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  configiration de dcbm admin
*/
export declare class Model_application_configuration_dcbm_admin extends Model_application_configuration implements Interface.Iapplication_configuration_dcbm_admin {
    /**
      configiration de dcbm admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd
*/
    "bddUrl"?: string;
    /**
uploadUrl url du service de telechargement des images
*/
    "uploadUrl"?: string;
    /**
l"url de l'api
*/
    "apiUrl"?: string;
}
