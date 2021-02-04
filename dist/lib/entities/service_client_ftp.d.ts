import { Entity_service } from "./service";
/**
  client ftps
*/
export declare class Entity_service_client_ftp extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkhost(val: any, path?: string): string[];
    static checkftpPort(val: any, path?: string): string[];
    static checkuser(val: any, path?: string): string[];
    static checkpassword(val: any, path?: string): string[];
    static checkdownloadPath(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
