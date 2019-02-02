import * as Interface from "./Interfaces";
import { Model_mongo_expression } from "./Model_mongo_expression";
/**
  mongo_expression_comp
*/
export declare class Model_mongo_expression_comp extends Model_mongo_expression implements Interface.Imongo_expression_comp {
    /**
      mongo_expression_comp
    */
    constructor(obj?: any);
    _class: string;
    /**
field name, for subDonc prop.fieldName
*/
    "field"?: string;
    /**
valeur de l'égalité
*/
    "value": string[];
    /**
type de donnée a comparer
*/
    "dataType": string;
    /**
la donnée est un tableau
*/
    "isArray"?: boolean;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mongo_expression_comp>;
}
