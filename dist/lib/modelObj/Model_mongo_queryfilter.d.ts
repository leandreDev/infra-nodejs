import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  mongo_queryfilter
*/
export declare class Model_mongo_queryfilter extends Base implements Interface.Imongo_queryfilter {
    /**
      mongo_queryfilter
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mongo_queryfilter>;
}
