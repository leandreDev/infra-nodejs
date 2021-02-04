import { Entity_application_configuration } from "./application_configuration";
/**
  c'est la configuration d'une application Client
*/
export declare class Entity_application_configuration_appClient extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkconfigurationUrlDb(val: any, path?: string): string[];
    static checkurlBase(val: any, path?: string): string[];
    static checksigninUrl(val: any, path?: string): string[];
    static checkserviceSessionUrl(val: any, path?: string): string[];
    static checkclientServiceUrl(val: any, path?: string): string[];
    static checkaclTemplate(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
