import { Entity_application_configuration } from "./application_configuration";
/**
  config qbp
*/
export declare class Entity_application_configuration_qbp extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkqbpCustomerApi(val: any, path?: string): string[];
    static checkqbpBddUrl(val: any, path?: string): string[];
    static checkqbpFsoUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
