import { Entity_service } from "./service";
/**
  service d'enregistrement
*/
export declare class Entity_service_signin extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkuserUrl(val: any, path?: string): string[];
    static checkmailResetUrl(val: any, path?: string): string[];
    static checkmailInfoUrl(val: any, path?: string): string[];
    static checkmailAccountCreatedUrl(val: any, path?: string): string[];
    static checkdurationResetDay(val: any, path?: string): string[];
    static checkuserAppUrl(val: any, path?: string): string[];
    static checkuserProfileUrl(val: any, path?: string): string[];
    static checkbddSsoUrl(val: any, path?: string): string[];
    static checkmailerUrl(val: any, path?: string): string[];
    static checkmailerName(val: any, path?: string): string[];
    static checkmailerMail(val: any, path?: string): string[];
    static checkresetMail(val: any, path?: string): string[];
    static checkupdateMail(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
