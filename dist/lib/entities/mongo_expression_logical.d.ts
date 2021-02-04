import { Entity_mongo_expression } from "./mongo_expression";
/**
  Logical Query Operators
*/
export declare class Entity_mongo_expression_logical extends Entity_mongo_expression {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
