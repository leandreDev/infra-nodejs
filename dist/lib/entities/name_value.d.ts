import { Entity } from "@hfdev/utils";
/**
  paire clef valeur
*/
export declare class Entity_name_value extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkkey(val: any, path?: string): string[];
    static checkvalue(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
