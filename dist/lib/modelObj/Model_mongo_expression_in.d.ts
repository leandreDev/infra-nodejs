import * as Interface from "./Interfaces";
import { Model_mongo_expression_comp } from "./Model_mongo_expression_comp";
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_in
*/
export declare class Model_mongo_expression_in extends Model_mongo_expression_comp implements Interface.Imongo_expression_in {
    /**
      https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_in
    */
    constructor(obj?: any);
    _class: string;
}
