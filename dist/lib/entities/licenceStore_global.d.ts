import { Entity_licenceStore } from "./licenceStore";
/**
  licence store dont les applications sont le catalogue du client
*/
export declare class Entity_licenceStore_global extends Entity_licenceStore {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
