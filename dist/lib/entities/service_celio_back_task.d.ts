import { Entity_service } from "./service";
/**
  service celio back_task
*/
export declare class Entity_service_celio_back_task extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkfidBddUrl(val: any, path?: string): string[];
    static checkqcmBddUrl(val: any, path?: string): string[];
    static checkserviceFidUrl(val: any, path?: string): string[];
    static checksiteId(val: any, path?: string): string[];
    static checksecretToken(val: any, path?: string): string[];
    static checkserverUrl(val: any, path?: string): string[];
    static checkcaPath(val: any, path?: string): string[];
    static checkhybrisUrl(val: any, path?: string): string[];
    static checkclient_id(val: any, path?: string): string[];
    static checkclient_secret(val: any, path?: string): string[];
    static checkaccessTokenUrl(val: any, path?: string): string[];
    static checkmarketingCloudApisConf(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
