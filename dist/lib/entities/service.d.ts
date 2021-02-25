import { Entity } from "@leandredev/utils";
/**
  identification du service
*/
export declare class Entity_service extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkurlBase(val: any, path?: string): string[];
    static checkport(val: any, path?: string): string[];
    static checkdebug(val: any, path?: string): string[];
    static checksecretKey(val: any, path?: string): string[];
    static checkpublicAccess(val: any, path?: string): string[];
    static checkbindIp(val: any, path?: string): string[];
    static checkheaders(val: any, path?: string): string[];
    static checkaccessControlAllowOrigin(val: any, path?: string): string[];
    static checkconfServiceUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
