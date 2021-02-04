import { Entity } from "utils";
/**
  notices for client
*/
export declare class Entity_client_notices extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkvalues(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
