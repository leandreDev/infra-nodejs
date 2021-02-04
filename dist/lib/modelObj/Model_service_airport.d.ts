import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service airport
*/
export declare class Model_service_airport extends Model_service implements Interface.Iservice_airport {
    /**
      service airport
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la base de donnée
*/
    "bddUrl"?: string;
}
