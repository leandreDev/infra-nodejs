import { Entity_licence } from "./licence";
/**
  c'est une licence qui dure un certain temps
*/
export declare class Entity_licence_temporelle extends Entity_licence {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkvalidityStartDate(val: any, path?: string): string[];
    static checkvalidityEndDate(val: any, path?: string): string[];
    static checklicenceDuration(val: any, path?: string): string[];
    static checklicenceEndDate(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
