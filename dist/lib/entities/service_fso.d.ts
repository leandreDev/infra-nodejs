import { Entity_service } from "./service";
/**
  remote file system
*/
export declare class Entity_service_fso extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkfilePath(val: any, path?: string): string[];
    static checkbddServiceUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
