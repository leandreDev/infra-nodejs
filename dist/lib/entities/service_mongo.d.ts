import { Entity_service } from "./service";
/**
  configure un service mongo
*/
export declare class Entity_service_mongo extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkmongoosePath(val: any, path?: string): string[];
    static checkmongoAuthSource(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
