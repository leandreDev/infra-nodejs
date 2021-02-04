import { Entity_service } from "./service";
/**
  service_comptoireOr
*/
export declare class Entity_service_comptoireOr extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbddApiUrl(val: any, path?: string): string[];
    static checkssoApiUrl(val: any, path?: string): string[];
    static checklicenceApiUrl(val: any, path?: string): string[];
    static checkinfraBddUrl(val: any, path?: string): string[];
    static checkadminConfId(val: any, path?: string): string[];
    static checkend_client(val: any, path?: string): string[];
    static checkadminLicenceStoreId(val: any, path?: string): string[];
    static checkadminAppId(val: any, path?: string): string[];
    static checksendgridApiUrl(val: any, path?: string): string[];
    static checksenderName(val: any, path?: string): string[];
    static checksenderEmail(val: any, path?: string): string[];
    static checktransactionEmailTemplate(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
