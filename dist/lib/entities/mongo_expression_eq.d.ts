import { Entity_mongo_expression_comp } from "./mongo_expression_comp";
/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_eq
*/
export declare class Entity_mongo_expression_eq extends Entity_mongo_expression_comp {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
