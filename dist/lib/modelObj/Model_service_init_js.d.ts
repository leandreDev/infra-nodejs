import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service qui retourne un init.js
*/
export declare class Model_service_init_js extends Model_service implements Interface.Iservice_init_js {
    /**
      service qui retourne un init.js
    */
    constructor(obj?: any);
    _class: string;
    /**
liste des templates disponnibles
*/
    "templates": Interface.ITemplateLodash[];
}
