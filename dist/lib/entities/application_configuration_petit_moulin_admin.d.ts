import { Entity_application_configuration } from "./application_configuration";
/**
  conf petit_moulin_admin
*/
export declare class Entity_application_configuration_petit_moulin_admin extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkserviceUrl(val: any, path?: string): string[];
    static checkbddUrl(val: any, path?: string): string[];
    static checkfsoUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
