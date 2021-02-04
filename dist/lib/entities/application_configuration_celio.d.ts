import { Entity_application_configuration } from "./application_configuration";
/**
  configuration générale application celio
*/
export declare class Entity_application_configuration_celio extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkfidServiceUrl(val: any, path?: string): string[];
    static checkqcmServiceUrl(val: any, path?: string): string[];
    static checkFidBDDUrl(val: any, path?: string): string[];
    static checkQcmBDDUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
