import { Entity_application_configuration } from "./application_configuration";
/**
  configiration de dcbm admin
*/
export declare class Entity_application_configuration_dcbm_admin extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbddUrl(val: any, path?: string): string[];
    static checkuploadUrl(val: any, path?: string): string[];
    static checkapiUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
