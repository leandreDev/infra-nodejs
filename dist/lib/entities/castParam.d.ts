import { Entity } from "@hfdev/utils";
/**
  paramètre d'une querry qui doit être casté
*/
export declare class Entity_castParam extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkparamName(val: any, path?: string): string[];
    static checktype(val: any, path?: string): string[];
    static checkparam(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
