import { Entity_application } from "./application";
/**
  c'est un paquet de carte
*/
export declare class Entity_pack_card extends Entity_application {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkimageUrl(val: any, path?: string): string[];
    static checkcompanyName(val: any, path?: string): string[];
    static checkcompanyId(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
