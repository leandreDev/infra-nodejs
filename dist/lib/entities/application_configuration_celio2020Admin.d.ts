import { Entity_application_configuration } from "./application_configuration";
/**
  conf de l'app celio 2020
*/
export declare class Entity_application_configuration_celio2020Admin extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkserviceBddUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
