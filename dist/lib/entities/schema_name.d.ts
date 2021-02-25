import { Entity } from "@leandredev/utils";
/**
  mapping de schema et de nom
*/
export declare class Entity_schema_name extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkentity(val: any, path?: string): string[];
    static checksingular(val: any, path?: string): string[];
    static checkplural(val: any, path?: string): string[];
    static checkfieldName(val: any, path?: string): string[];
    static checkunvisibleFields(val: any, path?: string): string[];
    static checkfieldsNames(val: any, path?: string): string[];
    static checklistParameter(val: any, path?: string): string[];
    static checkcreate(val: any, path?: string): string[];
    static checkdelete(val: any, path?: string): string[];
    static checkclone(val: any, path?: string): string[];
    static checkupdate(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
