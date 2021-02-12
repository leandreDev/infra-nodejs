import { Entity } from "@hfdev/utils";
/**
  période de distribution
*/
export declare class Entity_periodicalDistrution extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checknbMax(val: any, path?: string): string[];
    static checkcurrentNb(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
