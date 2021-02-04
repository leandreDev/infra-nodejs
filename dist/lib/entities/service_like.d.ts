import { Entity_service } from "./service";
/**
  service permettant de liker un objet de la base
*/
export declare class Entity_service_like extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklikeCollection(val: any, path?: string): string[];
    static checknoteCollection(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
