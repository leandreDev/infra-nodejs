import { Entity_service } from "./service";
/**
  administration de l'infra
*/
export declare class Entity_service_infra_admin extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkssoBdUrl(val: any, path?: string): string[];
    static checkinfraBdUrl(val: any, path?: string): string[];
    static checkplatformBdUrl(val: any, path?: string): string[];
    static checkservice_nginxMultiConfiguratorId(val: any, path?: string): string[];
    static checknginxApplicationSuffix(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
