import { Entity } from "@leandredev/utils";
/**
  description d'une requete avec request
*/
export declare class Entity_Request extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkurl(val: any, path?: string): string[];
    static checkmethod(val: any, path?: string): string[];
    static checkheaders(val: any, path?: string): string[];
    static checkbody(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
