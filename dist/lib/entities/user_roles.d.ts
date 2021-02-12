import { Entity } from "@hfdev/utils";
/**
  paire utilisateurs role
*/
export declare class Entity_user_roles extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkuser(val: any, path?: string): string[];
    static checkroles(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
