import { Entity_service } from "./service";
/**
  service celio qcm admin
*/
export declare class Entity_service_celio_qcm_admin extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbddUrl(val: any, path?: string): string[];
    static checkserviceFidUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
