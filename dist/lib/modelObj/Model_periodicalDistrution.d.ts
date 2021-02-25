import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  période de distribution
*/
export declare class Model_periodicalDistrution extends Base implements Interface.IperiodicalDistrution {
    /**
      période de distribution
    */
    constructor(obj?: any);
    _class: string;
    /**
nombre maximum de distribution sur cette periode
*/
    "nbMax"?: number;
    /**
nombre de licence disponible sur la période actuelle
*/
    "currentNb"?: number;
}
