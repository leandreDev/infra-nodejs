import { Entity } from "@hfdev/utils";
/**
  association d'une entité et de l'url de son service
*/
export declare class Entity_entity_source extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkurl(val: any, path?: string): string[];
    static checkentityName(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
