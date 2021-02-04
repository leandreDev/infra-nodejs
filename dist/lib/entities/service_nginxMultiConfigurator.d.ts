import { Entity_service_nginxConfigurator } from "./service_nginxConfigurator";
/**
  configuration d'un service nginx multi configuration
*/
export declare class Entity_service_nginxMultiConfigurator extends Entity_service_nginxConfigurator {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checknginxUser(val: any, path?: string): string[];
    static checkserviceUrl(val: any, path?: string): string[];
    static checkclientUrl(val: any, path?: string): string[];
    static checkappInstanceUrl(val: any, path?: string): string[];
    static checkappUrl(val: any, path?: string): string[];
    static checkconfigurationFile(val: any, path?: string): string[];
    static checkconfApplication(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
