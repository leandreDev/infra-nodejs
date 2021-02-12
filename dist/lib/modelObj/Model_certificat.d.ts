import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
/**
  certificat
*/
export declare class Model_certificat extends Base implements Interface.Icertificat {
    /**
      certificat
    */
    constructor(obj?: any);
    _class: string;
    /**
nom du certificat
*/
    "name"?: string;
}
