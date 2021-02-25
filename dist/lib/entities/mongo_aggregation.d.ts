import { Entity } from "@leandredev/utils";
/**
  les opérateurs d'aggregation du pipe de mongo
*/
export declare class Entity_mongo_aggregation extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkfrom(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
