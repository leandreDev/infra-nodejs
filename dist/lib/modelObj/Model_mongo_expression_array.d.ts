import * as Interface from "./Interfaces";
import { Model_mongo_expression } from "./Model_mongo_expression";
/**
  mongo_expression_array
*/
export declare class Model_mongo_expression_array extends Model_mongo_expression implements Interface.Imongo_expression_array {
    /**
      mongo_expression_array
    */
    constructor(obj?: any);
    _class: string;
    /**
value
*/
    "value"?: string[];
    /**
valueType
*/
    "valueType"?: string;
    /**
isArray
*/
    "isArray"?: boolean;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mongo_expression_array>;
}
