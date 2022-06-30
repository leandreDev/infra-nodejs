import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config airport
*/
export declare class Model_application_configuration_airport extends Model_application_configuration implements Interface.Iapplication_configuration_airport {
    /**
      config airport
    */
    constructor(obj?: any);
    _class: string;
    /**
url des api airport
*/
    "airportApi"?: string;
    /**
url de lapi de bdd airport
*/
    "airportBddUrl"?: string;
    /**
url du service fso airport
*/
    "fsoUrl"?: string;
}
