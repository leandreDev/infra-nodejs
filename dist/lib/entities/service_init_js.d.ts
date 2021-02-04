import { Entity_service } from "./service";
/**
  service qui retourne un init.js
*/
export declare class Entity_service_init_js extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checktemplates(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
