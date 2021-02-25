import { Entity } from "@leandredev/utils";
/**
  paramètre d'une route
*/
export declare class Entity_routeParam extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkparamName(val: any, path?: string): string[];
    static checktype(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
