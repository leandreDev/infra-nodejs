import { Entity } from "utils";
/**
  représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
*/
export declare class Entity_licence extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkend_client(val: any, path?: string): string[];
    static checkuser(val: any, path?: string): string[];
    static checkapplication_instance(val: any, path?: string): string[];
    static checkressource(val: any, path?: string): string[];
    static checklicenceStoreRef(val: any, path?: string): string[];
    static checkcreationDate(val: any, path?: string): string[];
    static checkusingDate(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
