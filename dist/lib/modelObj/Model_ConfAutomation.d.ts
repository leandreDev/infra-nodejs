import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  Configuration pour les automation des services qbp
*/
export declare class Model_ConfAutomation extends Base implements Interface.IConfAutomation {
    /**
      Configuration pour les automation des services qbp
    */
    constructor(obj?: any);
    _class: string;
    /**
Date auquel les payouts doivent etre effectuer
*/
    "datesForGeneratePayout"?: number[];
    /**
Dates de generation des factures
*/
    "datesForGenerateInvoice"?: number[];
}
