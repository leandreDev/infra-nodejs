import { Entity_application_configuration } from "./application_configuration";
/**
  config qbp admin
*/
export declare class Entity_application_configuration_qbp_admin extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkqbpBddUrl(val: any, path?: string): string[];
    static checkqbpAdminService(val: any, path?: string): string[];
    static checkfsoUrl(val: any, path?: string): string[];
    static checkmangoConf(val: any, path?: string): string[];
    static checkorderService(val: any, path?: string): string[];
    static checksavService(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
