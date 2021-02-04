import { Entity } from "utils";
/**
  socketIoConfig
*/
export declare class Entity_socketIoConfig extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkserverOptionPath(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
