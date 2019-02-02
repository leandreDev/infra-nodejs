import * as Interface from "./Interfaces";
import { Model_mongo_expression_comp } from "./Model_mongo_expression_comp";
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lt
*/
export declare class Model_mongo_expression_lt extends Model_mongo_expression_comp implements Interface.Imongo_expression_lt {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lt
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mongo_expression_lt>;
}
