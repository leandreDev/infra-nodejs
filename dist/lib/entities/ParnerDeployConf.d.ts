import { Entity } from "@leandredev/utils";
/**
  configuration du déploiement de partenaire
*/
export declare class Entity_ParnerDeployConf extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkadminUrl(val: any, path?: string): string[];
    static checklandingPageUrl(val: any, path?: string): string[];
    static checkappClientTemplateId(val: any, path?: string): string[];
    static checkappAdminTemplateId(val: any, path?: string): string[];
    static checkendClientTemplateId(val: any, path?: string): string[];
    static checkoidcTemplateId(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
