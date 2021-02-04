import { Entity__view } from "./_view";
/**
  view avec des params
*/
export declare class Entity__view_params extends Entity__view {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkparams(val: any, path?: string): string[];
    static checkcastParams(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
