import { Entity } from "utils";
/**
  configuration ftp
*/
export declare class Entity_ftpConf extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkhost(val: any, path?: string): string[];
    static checkport(val: any, path?: string): string[];
    static checkusername(val: any, path?: string): string[];
    static checkpassword(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
