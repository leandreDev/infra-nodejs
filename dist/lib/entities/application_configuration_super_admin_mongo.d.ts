import { Entity_application_configuration } from "./application_configuration";
/**
  configuration de l'application superAdminMongo
*/
export declare class Entity_application_configuration_super_admin_mongo extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkservicesUrl(val: any, path?: string): string[];
    static checkforumUrl(val: any, path?: string): string[];
    static checkfileServiceUrl(val: any, path?: string): string[];
    static checkURL_FileService(val: any, path?: string): string[];
    static checknginx(val: any, path?: string): string[];
    static checksupervisor(val: any, path?: string): string[];
    static checkmenu(val: any, path?: string): string[];
    static checkentityUrl(val: any, path?: string): string[];
    static checkentityName(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
