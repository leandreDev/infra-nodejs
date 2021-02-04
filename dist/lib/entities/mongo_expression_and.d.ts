import { Entity_mongo_expression_logical } from "./mongo_expression_logical";
/**
  https://docs.mongodb.com/manual/reference/operator/query/and/
*/
export declare class Entity_mongo_expression_and extends Entity_mongo_expression_logical {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkexpression(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
