import { Entity } from "@leandredev/utils";
/**
  config pour MarketingCloudApis
*/
export declare class Entity_MarketingCloudApisConf extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkaccessTokenUrl(val: any, path?: string): string[];
    static checkclient_id(val: any, path?: string): string[];
    static checkclient_secret(val: any, path?: string): string[];
    static checkaccount_id(val: any, path?: string): string[];
    static checksubDomain(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
