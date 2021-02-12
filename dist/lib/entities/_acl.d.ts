import { Entity } from "@hfdev/utils";
/**
  Acl d'un enregistrement
*/
export declare class Entity__acl extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkcreator(val: any, path?: string): string[];
    static checkreaders(val: any, path?: string): string[];
    static checkwriters(val: any, path?: string): string[];
    static checkadmins(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
