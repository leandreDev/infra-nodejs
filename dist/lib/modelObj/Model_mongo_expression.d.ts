import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  mongo_expression
*/
export declare class Model_mongo_expression extends Base implements Interface.Imongo_expression {
    /**
      mongo_expression
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mongo_expression>;
}
