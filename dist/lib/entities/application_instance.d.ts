import { Entity } from "@hfdev/utils";
/**
  c'est le couple application configuration
*/
export declare class Entity_application_instance extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkapplication(val: any, path?: string): string[];
    static checkconfiguration(val: any, path?: string): string[];
    static checkend_client(val: any, path?: string): string[];
    static checkoidc_client(val: any, path?: string): string[];
    static checkcss(val: any, path?: string): string[];
    static checkpublic_data(val: any, path?: string): string[];
    static checkport(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
