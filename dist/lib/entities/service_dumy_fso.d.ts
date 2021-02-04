import { Entity_service } from "./service";
/**
  simple remote file system a n utiliser que pour des test
*/
export declare class Entity_service_dumy_fso extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkfsoBase(val: any, path?: string): string[];
    static checkurl_bd(val: any, path?: string): string[];
    static checkurl_folder_collection(val: any, path?: string): string[];
    static checkurl_file_collection(val: any, path?: string): string[];
    static checkurl_service(val: any, path?: string): string[];
    static checkroot_file_directory(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
