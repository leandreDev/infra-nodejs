import { Entity } from "utils";
/**
  configuration d'un service dans le superviseur
*/
export declare class Entity_service_supervision_service_conf extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkpath(val: any, path?: string): string[];
    static checkargs(val: any, path?: string): string[];
    static checkoptions(val: any, path?: string): string[];
    static checkrestart(val: any, path?: string): string[];
    static checkmaxKill(val: any, path?: string): string[];
    static checkminTime(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
