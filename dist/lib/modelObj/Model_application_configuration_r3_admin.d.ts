import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config r3 admin
*/
export declare class Model_application_configuration_r3_admin extends Model_application_configuration implements Interface.Iapplication_configuration_r3_admin {
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
uploadUrl url du service de telechargement des images
*/
    "uploadUrl"?: string;
    /**
l"url de l'api
*/
    "apiUrl"?: string;
}
