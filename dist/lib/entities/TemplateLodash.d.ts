import { Entity } from "utils";
/**
  template lodash + nom
*/
export declare class Entity_TemplateLodash extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checktemplate(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
