import { Entity_application_configuration } from "./application_configuration";
/**
  cond des comptoire de l'or admin
*/
export declare class Entity_application_configuration_manu_admin extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbddApiUrl(val: any, path?: string): string[];
    static checkserviceUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
