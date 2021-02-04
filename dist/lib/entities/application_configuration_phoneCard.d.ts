import { Entity_application_configuration } from "./application_configuration";
/**
  configuration d'une application phoneCard
*/
export declare class Entity_application_configuration_phoneCard extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
