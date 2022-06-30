import { Entity } from "@leandredev/utils";
/**
  Configuration de connexion BigBen
*/
export declare class Entity_BigBenConf extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checku(val: any, path?: string): string[];
    static checkp(val: any, path?: string): string[];
    static checkk(val: any, path?: string): string[];
    static checkapiUrl(val: any, path?: string): string[];
    static checkmarcoApiKey(val: any, path?: string): string[];
    static checkmarcoApiUrl(val: any, path?: string): string[];
    static checkisMarcoApiActive(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
