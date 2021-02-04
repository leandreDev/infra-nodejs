import { Entity_service } from "./service";
/**
  service de creation de pdf
*/
export declare class Entity_service_pdfrip extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
