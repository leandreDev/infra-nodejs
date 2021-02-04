import { Entity_application_configuration } from "./application_configuration";
/**
  config de l'app minds up admin
*/
export declare class Entity_AppConf_minds_up_admin extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkapiUrl(val: any, path?: string): string[];
    static checkserviceMindsUpUrl(val: any, path?: string): string[];
    static checkrgpd(val: any, path?: string): string[];
    static checkuploadUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
