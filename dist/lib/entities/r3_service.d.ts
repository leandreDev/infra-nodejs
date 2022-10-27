import { Entity_service } from "./service";
/**
  service métier de QBP
*/
export declare class Entity_r3_service extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbddUrl(val: any, path?: string): string[];
    static checkssoBddUrl(val: any, path?: string): string[];
    static checkinfraBddUrl(val: any, path?: string): string[];
    static checkssoApiUrl(val: any, path?: string): string[];
    static checklicenceApiUrl(val: any, path?: string): string[];
    static checkclient_id(val: any, path?: string): string[];
    static checkclient_secret(val: any, path?: string): string[];
    static checkSendGridConf(val: any, path?: string): string[];
    static checkpdfRipUrl(val: any, path?: string): string[];
    static checkpdfAppUrl(val: any, path?: string): string[];
    static checkfsoUrl(val: any, path?: string): string[];
    static checkparntaireConfig(val: any, path?: string): string[];
    static checkauthorizedDomaine(val: any, path?: string): string[];
    static checkadminSiteUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
