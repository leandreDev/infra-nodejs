import { Entity } from "utils";
/**
  c'est une paire nom url
*/
export declare class Entity_name_url extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkurl(val: any, path?: string): string[];
    static checkrefId(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
