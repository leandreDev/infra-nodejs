import { Entity_service } from "./service";
/**
  service celio qcm
*/
export declare class Entity_service_celio_qcm extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbddUrl(val: any, path?: string): string[];
    static checkserviceFidUrl(val: any, path?: string): string[];
    static checksecretToken(val: any, path?: string): string[];
    static checkserverUrl(val: any, path?: string): string[];
    static checkcaPath(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
