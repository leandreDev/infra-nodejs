import { Entity_application_configuration } from "./application_configuration";
/**
  config airport
*/
export declare class Entity_application_configuration_airport extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkairportApi(val: any, path?: string): string[];
    static checkairportBddUrl(val: any, path?: string): string[];
    static checkfsoUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
