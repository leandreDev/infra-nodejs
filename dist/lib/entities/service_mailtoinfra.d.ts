import { Entity_service } from "./service";
/**
  service qui permet de configurer l'authentification a partir d'un mail
*/
export declare class Entity_service_mailtoinfra extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkmailsMapping(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
