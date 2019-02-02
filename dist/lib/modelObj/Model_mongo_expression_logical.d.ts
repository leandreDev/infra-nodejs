import * as Interface from "./Interfaces";
import { Model_mongo_expression } from "./Model_mongo_expression";
/**
  Logical Query Operators
*/
export declare class Model_mongo_expression_logical extends Model_mongo_expression implements Interface.Imongo_expression_logical {
    /**
      Logical Query Operators
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mongo_expression_logical>;
}
