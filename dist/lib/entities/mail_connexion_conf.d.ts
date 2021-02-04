import { Entity } from "utils";
/**
  associe un mail a une configuration de connexion sso+ app
*/
export declare class Entity_mail_connexion_conf extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkmailPatern(val: any, path?: string): string[];
    static checkclientId(val: any, path?: string): string[];
    static checkredirectUri(val: any, path?: string): string[];
    static checkend_client(val: any, path?: string): string[];
    static checkapplication_instance(val: any, path?: string): string[];
    static checklicence_service(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
