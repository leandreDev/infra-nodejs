import { Entity } from "@hfdev/utils";
/**
  mongo_queryfilter
*/
export declare class Entity_mongo_queryfilter extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
