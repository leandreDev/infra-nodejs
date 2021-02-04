import { Entity_field } from "./field";
/**
  string est un type de base qui permet de représenter les champ de type string
*/
export declare class Entity_string extends Entity_field {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkdescription(val: any, path?: string): string[];
    static checkisArrayOf(val: any, path?: string): string[];
    static checkrequired(val: any, path?: string): string[];
    static checkunique(val: any, path?: string): string[];
    static checkindex(val: any, path?: string): string[];
    static checkdefault(val: any, path?: string): string[];
    static checklowercase(val: any, path?: string): string[];
    static checkuppercase(val: any, path?: string): string[];
    static checktrim(val: any, path?: string): string[];
    static checkmatch(val: any, path?: string): string[];
    static checkenum(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
