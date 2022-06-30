import { Entity_application_configuration } from "./application_configuration";
/**
  config boisdor admin
*/
export declare class Entity_application_configuration_boisdor_admin_seller extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkboisdorSellerApi(val: any, path?: string): string[];
    static checkboisdorBddUrl(val: any, path?: string): string[];
    static checkfsoUrl(val: any, path?: string): string[];
    static checkapiPublicUrl(val: any, path?: string): string[];
    static checkboisdorMailService(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
