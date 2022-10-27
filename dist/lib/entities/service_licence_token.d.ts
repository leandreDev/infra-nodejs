import { Entity_service } from "./service";
/**
  c'est un service en charge de valider les licences et retourner les configurations des applications web
*/
export declare class Entity_service_licence_token extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklicenceUrl(val: any, path?: string): string[];
    static checkapplication_instanceUrl(val: any, path?: string): string[];
    static checktockenDuration(val: any, path?: string): string[];
    static checkcertificates(val: any, path?: string): string[];
    static checkend_clientUrl(val: any, path?: string): string[];
    static checkurl_bdd(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
