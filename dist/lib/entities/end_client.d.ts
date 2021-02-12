import { Entity } from "@hfdev/utils";
/**
  c'est le client que l'on facture
*/
export declare class Entity_end_client extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checklabel(val: any, path?: string): string[];
    static checkapplications(val: any, path?: string): string[];
    static checkadmins(val: any, path?: string): string[];
    static checklicenceStore(val: any, path?: string): string[];
    static checkclient_notices(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
