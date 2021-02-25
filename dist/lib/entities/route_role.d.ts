import { Entity } from "@leandredev/utils";
/**
  paire route et role
*/
export declare class Entity_route_role extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkroute(val: any, path?: string): string[];
    static checkrole(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
