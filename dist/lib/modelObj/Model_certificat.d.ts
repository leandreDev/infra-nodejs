import * as Interface from "./Interfaces";
import { Base } from "utils";
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
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_certificat>;
}
