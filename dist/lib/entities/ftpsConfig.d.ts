import { Entity } from "@hfdev/utils";
/**
  configuration pour un service sftp
*/
export declare class Entity_ftpsConfig extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkport(val: any, path?: string): string[];
    static checkcertPath(val: any, path?: string): string[];
    static checkfolderPath(val: any, path?: string): string[];
    static checklogin(val: any, path?: string): string[];
    static checkpassword(val: any, path?: string): string[];
    static checknewFileHook(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
