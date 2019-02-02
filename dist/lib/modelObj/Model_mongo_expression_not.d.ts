import * as Interface from "./Interfaces";
import { Model_mongo_expression_logical } from "./Model_mongo_expression_logical";
/**
  https://docs.mongodb.com/manual/reference/operator/query/not/
*/
export declare class Model_mongo_expression_not extends Model_mongo_expression_logical implements Interface.Imongo_expression_not {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/not/
    */
    constructor(obj?: any);
    _class: string;
    /**
field
*/
    "field": string;
    /**
expression
*/
    "expression": Interface.Imongo_expression[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mongo_expression_not>;
}
