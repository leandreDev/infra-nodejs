import { Entity } from "@leandredev/utils";
/**
  initalisation des listes
*/
export declare class Entity_dataTableInit extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkfieldsNames(val: any, path?: string): string[];
    static checksortField(val: any, path?: string): string[];
    static checkdirection(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
