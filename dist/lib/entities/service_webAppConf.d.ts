import { Entity_service } from "./service";
/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
export declare class Entity_service_webAppConf extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkinfraBddUrl(val: any, path?: string): string[];
    static checkssoBddUrl(val: any, path?: string): string[];
    static checkssoUrl(val: any, path?: string): string[];
    static checkssoIssuer(val: any, path?: string): string[];
    static checkconfigurationUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
