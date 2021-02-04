import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  la conf ferrand
*/
export declare class Model_application_configuration_ferrand extends Model_application_configuration implements Interface.Iapplication_configuration_ferrand {
    /**
      la conf ferrand
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service
*/
    "apiUrl"?: string;
    /**
bddUrl
*/
    "bddUrl"?: string;
}
