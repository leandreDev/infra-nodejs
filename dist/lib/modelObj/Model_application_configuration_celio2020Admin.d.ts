import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  conf de l'app celio 2020
*/
export declare class Model_application_configuration_celio2020Admin extends Model_application_configuration implements Interface.Iapplication_configuration_celio2020Admin {
    /**
      conf de l'app celio 2020
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bdd
*/
    "serviceBddUrl"?: string;
}
