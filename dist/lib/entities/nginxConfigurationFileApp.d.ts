import { Entity } from "@leandredev/utils";
/**
  description d'un fichier de configuration nginx
*/
export declare class Entity_nginxConfigurationFileApp extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checksuffix(val: any, path?: string): string[];
    static checktemplate(val: any, path?: string): string[];
    static checkapplications(val: any, path?: string): string[];
    static checkclients(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
