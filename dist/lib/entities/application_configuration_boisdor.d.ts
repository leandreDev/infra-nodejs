import { Entity_application_configuration } from "./application_configuration";
/**
  config boisdor
*/
export declare class Entity_application_configuration_boisdor extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkboisdorCustomerApi(val: any, path?: string): string[];
    static checkboisdorBddUrl(val: any, path?: string): string[];
    static checkfsoUrl(val: any, path?: string): string[];
    static checkpayementUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
