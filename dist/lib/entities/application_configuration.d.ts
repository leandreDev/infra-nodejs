import { Entity } from "utils";
/**
  c'est la configuration d'une application
*/
export declare class Entity_application_configuration extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkservices(val: any, path?: string): string[];
    static checkappName(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
