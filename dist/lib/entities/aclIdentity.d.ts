import { Entity } from "@hfdev/utils";
/**
  description d'une identit   pour l'acl
*/
export declare class Entity_aclIdentity extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkend_client(val: any, path?: string): string[];
    static checkapplicaton_instance(val: any, path?: string): string[];
    static checkrole(val: any, path?: string): string[];
    static checkuser(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
