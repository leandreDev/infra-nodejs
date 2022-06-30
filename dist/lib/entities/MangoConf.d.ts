import { Entity } from "@leandredev/utils";
/**
  Données de configuration
*/
export declare class Entity_MangoConf extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkclientId(val: any, path?: string): string[];
    static checkversion(val: any, path?: string): string[];
    static checkapiKey(val: any, path?: string): string[];
    static checkserverUrl(val: any, path?: string): string[];
    static checkpaymentRedirectUrl(val: any, path?: string): string[];
    static checkclientUserId(val: any, path?: string): string[];
    static checkqbpUserIdInMangoPay(val: any, path?: string): string[];
    static checkqbpWalletIdInMangoPay(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
