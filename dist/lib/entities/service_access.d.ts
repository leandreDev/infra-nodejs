import { Entity } from "@hfdev/utils";
/**
  décrit les régles de paramètre des servies
*/
export declare class Entity_service_access extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkservice(val: any, path?: string): string[];
    static checkhttAccess(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
