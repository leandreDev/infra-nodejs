import { Entity_service } from "./service";
/**
  service de tirage au sort de polo
*/
export declare class Entity_service_polo_celio extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbdd_url(val: any, path?: string): string[];
    static checkmaxNumberOfWinner(val: any, path?: string): string[];
    static checkdrawStat(val: any, path?: string): string[];
    static checkbigDrawStat(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
