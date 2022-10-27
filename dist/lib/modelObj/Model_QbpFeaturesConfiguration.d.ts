import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  liste de functionalites pouvant etre actives ou desactives
*/
export declare class Model_QbpFeaturesConfiguration extends Base implements Interface.IQbpFeaturesConfiguration {
    /**
      liste de functionalites pouvant etre actives ou desactives
    */
    constructor(obj?: any);
    _class: string;
    /**
determine se le payement par virement bancaire est active ou non
*/
    "bankWire"?: boolean;
    /**
Determine si l option floaPay est activer ou non
*/
    "floaPay"?: boolean;
    /**
Switch entre recherche par model ou productStock
*/
    "searchByModel"?: boolean;
}
