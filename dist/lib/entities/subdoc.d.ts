import { Entity_field } from "./field";
/**
  ce champ permet d'insérer un document dans un autre
*/
export declare class Entity_subdoc extends Entity_field {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkdescription(val: any, path?: string): string[];
    static checkisArrayOf(val: any, path?: string): string[];
    static checkrequired(val: any, path?: string): string[];
    static checkunique(val: any, path?: string): string[];
    static checkindex(val: any, path?: string): string[];
    static checkprotoSchemaId(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
