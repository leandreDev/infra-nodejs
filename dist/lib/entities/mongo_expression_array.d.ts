import { Entity_mongo_expression } from "./mongo_expression";
/**
  mongo_expression_array
*/
export declare class Entity_mongo_expression_array extends Entity_mongo_expression {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkvalue(val: any, path?: string): string[];
    static checkvalueType(val: any, path?: string): string[];
    static checkisArray(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
