import { Entity_service } from "./service";
/**
  service celio fid admin
*/
export declare class Entity_service_celio_fid_admin extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkfiBddUrl(val: any, path?: string): string[];
    static checkqcmBddUrl(val: any, path?: string): string[];
    static checkaccessTokenUrl(val: any, path?: string): string[];
    static checkvalidateTokenUrl(val: any, path?: string): string[];
    static checkclient_id(val: any, path?: string): string[];
    static checkclient_secret(val: any, path?: string): string[];
    static checkhybrisUrl(val: any, path?: string): string[];
    static checkearnEuroToPoint(val: any, path?: string): string[];
    static checkburnEuroToPoint(val: any, path?: string): string[];
    static checkserverUrl(val: any, path?: string): string[];
    static checksecretToken(val: any, path?: string): string[];
    static checkbasSiteId(val: any, path?: string): string[];
    static checkcertifPath(val: any, path?: string): string[];
    static checkcaPath(val: any, path?: string): string[];
    static checksftp(val: any, path?: string): string[];
    static checksftpTicketSrcPath(val: any, path?: string): string[];
    static checksftpTicketDestPath(val: any, path?: string): string[];
    static checkcbFidAdminUrl(val: any, path?: string): string[];
    static checkticket_costCenterExcluded(val: any, path?: string): string[];
    static checkscanOrderEarnPageSize(val: any, path?: string): string[];
    static checkscanOrderEaBurnPageSize(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
