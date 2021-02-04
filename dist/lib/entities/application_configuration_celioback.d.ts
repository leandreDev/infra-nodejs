import { Entity_application_configuration } from "./application_configuration";
/**
  configuration de l appli celio back
*/
export declare class Entity_application_configuration_celioback extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
