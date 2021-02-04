import { Entity_service } from "./service";
/**
  retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
*/
export declare class Entity_mailtoinfra2 extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkssoBdUrl(val: any, path?: string): string[];
    static checkinfraBdUrl(val: any, path?: string): string[];
    static checksavyLearnerId(val: any, path?: string): string[];
    static checkconfMapping(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
