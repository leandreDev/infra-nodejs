import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  collection de mail
*/
export declare class Model_mail extends Base implements Interface.Imail {
    /**
      collection de mail
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mail>;
}
