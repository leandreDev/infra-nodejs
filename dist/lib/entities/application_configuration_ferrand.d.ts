import { Entity_application_configuration } from "./application_configuration";
/**
  la conf ferrand
*/
export declare class Entity_application_configuration_ferrand extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkapiUrl(val: any, path?: string): string[];
    static checkbddUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
