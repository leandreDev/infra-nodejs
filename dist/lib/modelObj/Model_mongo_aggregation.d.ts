import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  les opérateurs d'aggregation du pipe de mongo
*/
export declare class Model_mongo_aggregation extends Base implements Interface.Imongo_aggregation {
    /**
      les opérateurs d'aggregation du pipe de mongo
    */
    constructor(obj?: any);
    _class: string;
    /**
Target collection for the $graphLookup operation to search, recursively matching the connectFromField to the connectToField. The from collection cannot be sharded and must be in the same database as any other collections used in the operation.
*/
    "from"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mongo_aggregation>;
}
