import { Entity } from "utils";
/**
  certificat
*/
export declare class Entity_certificat extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
