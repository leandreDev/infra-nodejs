import { Entity_service } from "./service";
/**
  communication temps réelle multi format
*/
export declare class Entity_service_socketIo extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkreturnValue(val: any, path?: string): string[];
    static checkallowCrossOrigin(val: any, path?: string): string[];
    static checksocketIo(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
