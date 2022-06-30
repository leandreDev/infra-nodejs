import { Entity_service } from "./service";
/**
  Proxy pou rles service c'evoi de colis de DPD
*/
export declare class Entity_dpd_dervice extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
