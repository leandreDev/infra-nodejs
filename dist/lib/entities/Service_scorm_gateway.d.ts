import { Entity_service } from "./service";
/**
  service passerelle d'un package scorm vers l'interne
*/
export declare class Entity_Service_scorm_gateway extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkprivateKey(val: any, path?: string): string[];
    static checkendClientId(val: any, path?: string): string[];
    static checksigninUrl(val: any, path?: string): string[];
    static checklicenceUrl(val: any, path?: string): string[];
    static checktemplateUser(val: any, path?: string): string[];
    static checktemplateProfileUser(val: any, path?: string): string[];
    static checkapiUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
